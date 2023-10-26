//import de le lib express
const express = require('express'); 
const cors = require('cors');
const pool = require('./db');
const bcrypt = require('bcrypt');
const session = require('express-session');
const bodyParser = require('body-parser');

// variable app qui utilise la lib d'express
const app = express(); 
require("dotenv").config();

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json())

// ROUTES //

// create //add// a car 
app.post('/addcar', async (req, res) => {
    try {
        const { marque, modele, carburant, nbporte, couleur, vitessmax, anneesortie, prix, urlimg, urlimgban } = req.body;

        const newCar = await pool.query(
            "INSERT INTO garage (marque, modele, carburant, nbporte, couleur, vitessmax, anneesortie, prix, urlimg, urlimgban) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *",
            [marque, modele, carburant, nbporte, couleur, vitessmax, anneesortie, prix, urlimg, urlimgban]
         );

         res.json(newCar.rows[0]);
    } catch (err) {
        console.log(err.message);
    }
})
// get all the cars
app.get('/addcar', async (req, res) => {
    try {
        const newCar = await pool.query("SELECT * FROM garage");
        res.json(newCar.rows);
    } catch (err) {
        console.error(err.message);
    }
})

// get a car
app.get('/addcar/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const newCar = await pool.query("SELECT * FROM garage WHERE car_id = $1", [id])

        res.json(newCar.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})

// update the cars
app.put('/addcar/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { 
            marque, 
            modele, 
            carburant, 
            nbporte, 
            couleur, 
            vitessmax, 
            anneesortie, 
            prix, 
            urlimg, 
            urlimgban } = req.body;
        const updateNewCar = await pool.query("UPDATE garage SET marque = $1, modele = $2, carburant = $3, nbporte = $4, couleur = $5, vitessmax = $6, anneesortie = $7, prix = $8, urlimg = $9, urlimgban = $10 WHERE car_id = $11", [marque, modele, carburant, nbporte, couleur, vitessmax, anneesortie, prix, urlimg, urlimgban, id]);

        res.json("car is updated");
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Erreur serveur");
    }
});

// delete a car
app.delete('/addcar/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deleteNewCar = await pool.query("DELETE FROM garage WHERE car_id = $1", [id]);

        res.json("car was deleted");
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Erreur serveur");
    }
});








// ------------------------------ CONNEXION -------------------------------- //
// ROUTES //

// create //add// a user
app.post('/users', async (req, res) => {
    try {
        const { 
            role,
            name,
            firstname,
            email,
            password,
            adresse,
            birth,
            numsecu,
            genre } = req.body;

        const user = await pool.query(
            "INSERT INTO connexion ( role, name, firstname, email, password, adresse, birth, numsecu, genre) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",
            [ role, name, firstname, email, password, adresse, birth, numsecu, genre]
         );

         res.json(user.rows[0]);
    } catch (err) {
        console.log(err.message);
    }
})

// get all the users
app.get('/users', async (req, res) => {
    try {
        const user = await pool.query("SELECT * FROM connexion");
        res.json(user.rows);
    } catch (err) {
        console.error(err.message);
    }
});

// get a user
app.get('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await pool.query("SELECT * FROM connexion WHERE user_id = $1", [id])

        res.json(user.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})

// update the users
app.put('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { 
            role,
            name,
            firstname,
            email,
            password,
            adresse,
            birth,
            numsecu,
            genre  } = req.body;
        const updateUser = await pool.query("UPDATE connexion SET role = $1, name = $2, firstname = $3, email = $4, password = $5, adresse = $6, birth = $7, numsecu = $8, genre = $9 WHERE user_id = $10", [role, name, firstname, email, password, adresse, birth, numsecu, genre, id]);

        res.json("user is updated");
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Erreur serveur");
    }
});

// delete a user
app.delete('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deleteUser = await pool.query("DELETE FROM connexion WHERE user_id = $1", [id]);

        res.json("user was deleted");
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Erreur serveur");
    }
});

// login //
app.use(session({
    secret: 'alassane',
    credentials: true,
    name: "sid",
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: process.env.ENVIRONMENT === "production" ? "true" : "auto",
        httpOnly: true,
        sameSite: process.env.ENVIRONMENT === "production" ? "none" : "lax",
    }
}))


app.post('/users/login', async (req, res) => {
    try {
        const potentialLogin = await pool.query("SELECT email, password FROM connexion u WHERE u.email = $1", [req.body.email]);

        if (potentialLogin.rowCount > 0) {
            console.log(req.session)
            // Utilisez une bibliothèque de hachage comme bcrypt pour comparer les mots de passe
            const isSamePassword = bcrypt.compare(req.body.password, potentialLogin.rows[0].password);

            if (isSamePassword) {
                // Connexion réussie
                req.session.users = {
                    email: req.body.email,
                    id: potentialLogin.rows[0].id,
                };
                res.json({ LoggedIn: true, status: "Logged in successfully" });
            } else {
                // Mauvais login
                res.json({ LoggedIn: false, status: "Wrong email ? or password" });
            }
        } else {
            // Aucun utilisateur trouvé avec cet email
            res.json({ LoggedIn: false, status: "Wrong email or password" });
        }
    } catch (error) {
        console.error("Erreur lors de la tentative de connexion :", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
    
});



app.listen(4000, () => {
    console.log("server is running on port 4000")
}) 