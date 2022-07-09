require("dotenv").config();
const express = require("express");
const app = express();
const pool = require("./database/conn");
const cors = require("cors");

const PORT = process.env.PORT || 3255;

app.use(express.json());
app.use(cors());

//--------------------------------------------LOGIN---------------------------------------------------//
app.get("/api/popular", async (req, res) => {
   try {
      const popularCities = await pool.query("SELECT * FROM popular_places");
      res.json(popularCities.rows);
   } catch (error) {
      res.send(error.message);
   }
});
//--------------------------------------------HOME---------------------------------------------------//
//--------------------------------------------EXPLORE---------------------------------------------------//
//--------------------------------------------MY TRIPS---------------------------------------------------//
app.get("/api/usertrips/:id", async (req, res) => {
   const { id } = req.params;
   try {
      const userTrips = await pool.query("SELECT * FROM itinerary WHERE user_id = $1", [id]);
      res.json(userTrips.rows);
   } catch (error) {
      res.send(error.message);
   }
});

//--------------------------------------------MY INFO---------------------------------------------------//
app.get("/api/userinfo/:id", async (req, res) => {
   const { id } = req.params;
   try {
      const userProfile = await pool.query("SELECT * FROM users WHERE user_id = $1", [id]);
      res.json(userProfile.rows[0]);
   } catch (error) {
      res.send(error.message);
   }
});

app.listen(PORT, () => {
   console.log(`Listening on PORT ${PORT}`);
});
