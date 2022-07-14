require("dotenv").config();
const express = require("express");
const app = express();
const pool = require("./database/conn");
const cors = require("cors");
const bcrypt = require("bcrypt");

const PORT = process.env.PORT || 3255;

app.use(express.json());
app.use(cors());

//--------------------------------------------LOGIN---------------------------------------------------//

// POST REQ TO CREATE/REGISTER USER
app.post("/users", async (req, res) => {
   const { first_name, last_name, email, password } = req.body;
   try {
      const checkIfExists = await pool.query("SELECT email FROM users WHERE email = $1", [email]);
      if (checkIfExists.rows.length != 0) {
         res.json("User already exists");
      } else {
         const hashedPassword = await bcrypt.hash(password, 10);
         const newUser = await pool.query(
            "INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4) ON CONFLICT DO NOTHING RETURNING *",
            [first_name, last_name, email, hashedPassword]
         );
         res.json("Account Created!");
      }
   } catch {
      res.status(500).send();
   }
});

// CHECK TO SEE IF USER EXISTS AND COMPARES PASSWORD
app.post("/users/login", async (req, res) => {
   const { email, password } = req.body;

   const user = await pool.query("SELECT user_id, email, password FROM users WHERE email = $1", [email]);
   if (user.rows[0] === undefined) {
      res.status(400).json("User Not Found");
   }

   try {
      if (await bcrypt.compare(password, user.rows[0].password)) {
         res.json(user.rows[0].user_id);
      } else {
         res.json("Wrong Password");
      }
   } catch {
      res.status(500).send();
   }
});

//--------------------------------------------App.js-------------------------------------------------//

// This is for App.js to use the user_id to set a global state and get all of the user information
app.get("/users/:id", async (req, res) => {
   const userID = req.params.id;
   try {
      const userInfo = await pool.query("SELECT * FROM users WHERE user_id = $1", [userID]);
      res.json(userInfo.rows[0]);
   } catch {
      res.status(500).send();
   }
});

//--------------------------------------------HOME---------------------------------------------------//

// GET DATA FOR THE POPULAR PLACES
app.get("/api/popular", async (req, res) => {
   try {
      const popularCities = await pool.query("SELECT * FROM popular_places");
      res.json(popularCities.rows);
   } catch (error) {
      res.send(error.message);
   }
});

//--------------------------------------------EXPLORE/MY TRIPS---------------------------------------------------//
app.get("/users/trips/:id", async (req, res) => {
   const userID = req.params.id;
   try {
      const userTrips = await pool.query("SELECT * FROM trip WHERE user_id = $1", [userID]);
      res.json(userTrips.rows);
   } catch {
      res.status(500).send();
   }
});

app.get("/users/trips/:id/places", async (req, res) => {
   const tripID = req.params.id;
   try {
      const tripInfo = await pool.query("SELECT * FROM place WHERE trip_id = $1", [tripID]);
      res.json(tripInfo.rows);
   } catch {
      res.status(500).send();
   }
});

app.listen(PORT, () => {
   console.log(`Listening on PORT ${PORT}`);
});
