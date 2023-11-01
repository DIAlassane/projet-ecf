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









// ------------------------------ SERVICES -------------------------------- //
// ROUTES //

// create //add// a service
app.post('/services', async (req, res) => {
    try {
        const { 
            img,
            title ,
            prix,
            decriptioncard,
            question,
            reponse,
            question2,
            reponse2,
            question3,
            reponse3 } = req.body;

        const service = await pool.query(
            "INSERT INTO services (  img, title , prix, decriptioncard, question, reponse,  question2, reponse2, question3, reponse3) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *",
            [  img, title , prix, decriptioncard, question, reponse,  question2, reponse2, question3, reponse3]
         );

         res.json(service.rows[0]);
    } catch (err) {
        console.log(err.message);
    }
})

// get all the services
app.get('/services', async (req, res) => {
    try {
        const service = await pool.query("SELECT * FROM services");
        res.json(service.rows);
    } catch (err) {
        console.error(err.message);
    }
});

// get a service
app.get('/services/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const service = await pool.query("SELECT * FROM services WHERE service_id = $1", [id])

        res.json(service.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})

// update the services
app.put('/services/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { 
            img,
            title ,
            prix,
            decriptioncard,
            question,
            reponse,
            question2,
            reponse2,
            question3,
            reponse3  } = req.body;
        const updateService = await pool.query("UPDATE services SET img = $1, title = $2, prix = $3, descriptioncard = $4, question = $5, reponse = $6, question2 = $7, reponse2 = $8, question3 = $9, reponse3 = $10 WHERE service_id = $11", [ img, title , prix, decriptioncard, question, reponse,  question2, reponse2, question3, reponse3, id]);

        res.json("service is updated");
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Erreur serveur");
    }
});

// delete a service
app.delete('/services/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deleteService = await pool.query("DELETE FROM services WHERE service_id = $1", [id]);

        res.json("service was deleted");
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Erreur serveur");
    }
});





// -------------------- ------------------------- ---------------------------- --------------------- //

// add Horaires
app.post('/horaires', async (req, res) => {
    try {
        const { 
            mois,
            semaine,
            jour,
            ouverturematine,
            fermeturematine,
            ouverturesoire,
            fermeturesoire } = req.body;

        const newHoraires = await pool.query(
            "INSERT INTO horaires (mois, semaine, jour, ouverturematine, fermeturematine, ouverturesoire, fermeturesoire ) VALUES($1, $2, $3, $4, $5, $6, $7 ) RETURNING *",
            [mois, semaine, jour, ouverturematine, fermeturematine, ouverturesoire, fermeturesoire ]
         );
         res.json(newHoraires.rows[0]);
    } catch (err) {
        console.log(err.message);
    }
})

// get all the horaires
app.get('/horaires', async (req, res) => {
    try {
        const horaire = await pool.query("SELECT * FROM horaires");
        res.json(horaire.rows);
    } catch (err) {
        console.error(err.message);
    }
});

// get a service
app.get('/horaires/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const horaire = await pool.query("SELECT * FROM horaires WHERE horaires_id = $1", [id])

        res.json(horaire.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})

// update the horaires
app.put('/horaires/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { 
            mois,
            semaine,
            jour,
            ouverturematine,
            fermeturematine,
            ouverturesoire,
            fermeturesoire   } = req.body;
        const updateHoraire = await pool.query("UPDATE horaires SET mois = $1, semaine = $2, jour = $3, ouverturematine = $4, fermeturematine = $5, ouverturesoire = $6, fermeturesoire = $7 WHERE horaires_id = $8", [ mois, semaine, jour, ouverturematine, fermeturematine, ouverturesoire, fermeturesoire, id]);

        res.json("horaire is updated");
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Erreur serveur");
    }
});

// delete a horaires
app.delete('/horaires/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deleteService = await pool.query("DELETE FROM horaires WHERE horaires_id = $1", [id]);

        res.json("horaire was deleted");
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Erreur serveur");
    }
});

// ------------------------  --------------------------------- ------------------------------------------------------------- ------------------------------------------ //

// add contact
app.post('/contactus', async (req, res) => {
    try {
        const { 
            email,
            numero,
            nom,
            prenom } = req.body;

        const newContact = await pool.query(
            "INSERT INTO contact (email, numero, nom, prenom ) VALUES($1, $2, $3, $4 ) RETURNING *",
            [email, numero, nom, prenom ]
         );
         res.json(newContact.rows[0]);
    } catch (err) {
        console.log(err.message);
    }
})

// get all the contact
app.get('/contactus', async (req, res) => {
    try {
        const contact = await pool.query("SELECT * FROM contact");
        res.json(contact.rows);
    } catch (err) {
        console.error(err.message);
    }
});

// delete a contact
app.delete('/contactus/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deleteContact = await pool.query("DELETE FROM contact WHERE contact_id = $1", [id]);

        res.json("contact was deleted");
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Erreur serveur");
    }
});




app.listen(4000, () => {
    console.log("server is running on port 4000")
}) 