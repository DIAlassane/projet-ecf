//import de le lib express
const express = require('express'); 
const cors = require('cors');
const pool = require('./db');

// variable app qui utilise la lib d'express
const app = express(); 

// Middleware
app.use(cors());
app.use(express.json());

// ROUTES //

// create //add// a car 
app.post('/addcar', async (req, res) => {
    try {
        const marque = req.body
        const modele = req.body
        const carburant = req.body
        const nbporte = req.body
        const couleur = req.body
        const vitessmax = req.body
        const anneesortie = req.body
        const prix = req.body
        const urlimg = req.body
        const urlimgban = req.body
        const newCar = await pool.query(
            "INSERT INTO garage (marque, modele, carburant, nbporte, couleur, vitessmax, anneesortie, prix, urlimg, urlimgban) VALUES($1)",
            [marque, modele, carburant, nbporte, couleur, vitessmax, anneesortie, prix, urlimg, urlimgban]
         );

         res.json(newCar);
    } catch (err) {
        console.log(err.message);
    }
})
// get all the cars

// get a car

// update the cars

// delete a car


app.listen(4000, () => {
    console.log("server is running on port 4000")
}) 