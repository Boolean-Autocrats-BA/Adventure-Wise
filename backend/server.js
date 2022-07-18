require("dotenv").config();
const express = require("express");
const app = express();
const pool = require("./database/conn");
const cors = require("cors");
const bcrypt = require("bcrypt");

const PORT = process.env.PORT || 3255;

app.use(express.json());
app.use(cors());

// DEV ROUTES
app.get("/dev/users", async (req, res) => {
   try {
      const users = await pool.query("SELECT * FROM users");
      res.json(users.rows);
   } catch {
      res.json("Error");
   }
});

app.get("/dev/trips", async (req, res) => {
   try {
      const trips = await pool.query("SELECT * FROM trip");
      res.json(trips.rows);
   } catch {
      res.json("Error");
   }
});

app.get("/dev/places", async (req, res) => {
   try {
      const place = await pool.query("SELECT * FROM place");
      res.json(place.rows);
   } catch {
      res.json("Error");
   }
});

//--------------------------------------------USERS---------------------------------------------------//

// CREATE/REGISTER USER
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
         res.json("OK");
      }
   } catch {
      res.status(500).json("Uh oh... Something went wrong");
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
      res.status(500).json("Uh oh... Something went wrong");
   }
});

// FOR USER TO UPDATE THEIR INFO
app.patch("/users/profile", async (req, res) => {
   const { user_id, email, address, city, state, zipcode } = req.body;
   try {
      const newInfo = await pool.query(
         "UPDATE users SET email = COALESCE($1, email), address = COALESCE($2, address), city = COALESCE($3, city), state = COALESCE($4, state), zipcode = COALESCE($5, zipcode) WHERE user_id = $6 RETURNING *",
         [email, address, city, state, zipcode, user_id]
      );
      res.status(200).json("Update Successful");
   } catch {
      res.status(500).json("Uh oh... Something went wrong");
   }
});

// THIS SETS THE GLOBAL VARIABLE TO BE THE USERID
app.get("/users/:id", async (req, res) => {
   const userID = req.params.id;
   try {
      const userInfo = await pool.query("SELECT * FROM users WHERE user_id = $1", [userID]);
      res.json(userInfo.rows[0]);
   } catch {
      res.status(500).json("Uh oh... Something went wrong");
   }
});

//--------------------------------------------HOME---------------------------------------------------//

// GET DATA FOR THE POPULAR PLACES
app.get("/api/popular", async (req, res) => {
   try {
      const popularCities = await pool.query("SELECT * FROM popular_places");
      res.json(popularCities.rows);
   } catch {
      res.status(500).json("Uh oh... Something went wrong");
   }
});

//---------------------------------------------- TRIPS TABLE ROUTE -------------------------------------------------//
app.get("/users/trips/:id", async (req, res) => {
   const userID = req.params.id;
   try {
      const userTrips = await pool.query("SELECT * FROM trip WHERE user_id = $1", [userID]);
      res.json(userTrips.rows);
   } catch {
      res.status(500).json("Uh oh... Something went wrong");
   }
});

app.post("/users/trips", async (req, res) => {
   const { trip_name, user_id } = req.body;
   try {
      const newTrip = await pool.query("INSERT INTO trip (trip_name, user_id) VALUES ($1, $2) RETURNING *", [
         trip_name,
         user_id,
      ]);
      res.status(200).json(newTrip.rows);
   } catch {
      res.status(500).json("Uh oh... Something went wrong");
   }
});

//--------------------------------------- PLACE TABLE ROUTES --------------------------------------------------------//
app.get("/users/trips/:id/places", async (req, res) => {
   const tripID = req.params.id;
   try {
      const tripInfo = await pool.query("SELECT * FROM place WHERE trip_id = $1", [tripID]);
      res.json(tripInfo.rows);
   } catch {
      res.status(500).json("Uh oh... Something went wrong");
   }
});

app.post("/users/trips/places", async (req, res) => {
   const { place_name, place_address, trip_date, trip_time, notes, trip_id } = req.body;
   try {
      const addPlace = await pool.query(
         "INSERT INTO place (place_name, place_address, trip_date, trip_time, notes, trip_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
         [place_name, place_address, trip_date, trip_time, notes, trip_id]
      );
      res.status(200).json(addPlace.rows);
   } catch {
      res.status(500).json("Uh oh... Something went wrong");
   }
});

app.patch("/users/trips/places/:id", async (req, res) => {
   const placeID = req.params.id;
   const { trip_date, trip_time, notes } = req.body;
   try {
      const updatePlace = await pool.query(
         "UPDATE place SET trip_date = COALESCE($1, trip_date), trip_time = COALESCE($2, trip_time), notes = COALESCE($3, notes) WHERE place_id = $4 RETURNING *",
         [trip_date, trip_time, notes, placeID]
      );
      res.status(200).json(updatePlace.rows);
   } catch {
      res.status(500).json("Uh oh... Something went wrong");
   }
});

app.delete("/users/trips/places/:id", async (req, res) => {
   const placeID = req.params.id;
   try {
      const deletePlace = await pool.query("DELETE FROM place WHERE place_id = $1", [placeID]);
      res.status(200).json("Successfully Deleted!");
   } catch {
      res.status(500).json("Uh oh... Something went wrong");
   }
});

app.listen(PORT, () => {
   console.log(`Listening on PORT ${PORT}`);
});
