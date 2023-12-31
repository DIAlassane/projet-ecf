//import des librairie
const express = require('express'); 
const cors = require('cors');
const pool = require('./db');
const bcrypt = require('bcrypt');
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
// const { authPage, authAdmin } = require('./controller/middlewares');

// variable app qui utilise la lib d'express
const app = express(); 
require("dotenv").config();

// Configurer CORS
const corsOptions = {
    origin: 'http://localhost:3000', // Autorise les requêtes provenant de ce domaine
    credentials: true, // Indiquez que les cookies et les en-têtes d'authentification peuvent être inclus
};

app.use(cors(corsOptions)); // Utilisez le middleware CORS avec les options spécifiées

app.use(cookieParser());
app.use((req, res, next) => {
    console.log(req.cookies); // Affiche les cookies dans la console
    next();
});



// Middleware
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

            // Hashage du mot de passe avec bcrypt
        const hashedPassword = await bcrypt.hash(password, 10); // Le deuxième argument est le coût du hash (nombre de tours)

        const user = await pool.query(
            "INSERT INTO connexion ( role, name, firstname, email, password, adresse, birth, numsecu, genre) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",
            [ role, name, firstname, email, hashedPassword, adresse, birth, numsecu, genre]
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

             // Hashage du mot de passe avec bcrypt s'il est fourni
        let hashedPassword = password;
        if (password) {
            hashedPassword = await bcrypt.hash(password, 10);
        }

        const updateUser = await pool.query(
            "UPDATE connexion SET role = $1, name = $2, firstname = $3, email = $4, password = $5, adresse = $6, birth = $7, numsecu = $8, genre = $9 WHERE user_id = $10", 
            [role, name, firstname, email, hashedPassword, adresse, birth, numsecu, genre, id]
            );

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
    secret: 'password',
    credentials: true,
    name: 'projetecf',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: process.env.ENVIRONMENT === 'production' ? true : 'auto',
        httpOnly: true,
        sameSite: process.env.ENVIRONMENT === 'production' ? 'none' : 'lax',
    }
}));

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const { rows } = await pool.query("SELECT * FROM connexion WHERE email = $1 AND password = $2", [email, password]);
    
        if (rows.length > 0) {
            res.json(rows); // Utilisateur trouvé, renvoyer les données de l'utilisateur
        } else {
            res.status(401).json({ message: "Wrong email/password combination" }); // Aucun utilisateur trouvé avec cet email/mot de passe
        }
    } catch (error) {
        console.error("Erreur lors de la tentative de connexion :", error);
        res.status(500).json({ error: "Internal Server Error" });
    }

    });

    app.use(session({
        secret: 'password',
        resave: false,
        saveUninitialized: true,
        cookie: {
            sameSite: "none",
            secure: true
        }
    }));

// Votre gestionnaire de déconnexion
app.post('/logout', async (req, res) => {
    try {
        // Supprimer la session de l'utilisateur de la base de données (vous devez avoir une table pour stocker les sessions utilisateur)
        const userId = req.session.users.id;
        await pool.query("DELETE FROM sessions WHERE user_id = $1", [userId]);

        // Effacer le cookie de l'utilisateur
        res.clearCookie("access_token", {
            sameSite: "none",
            secure: true,
        }).status(200).json("Vous avez bien été déconnecté");
    } catch (error) {
        console.error("Erreur lors de la déconnexion :", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});







// ------------------------------ SERVICES -------------------------------- //
// ROUTES //

// create //add// a service
app.post('/services', async (req, res) => {
    try {
        // Récupération des données du corps de la requête (req.body)
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

            // Exécution d'une requête SQL pour insérer les données dans la table 'services'
        const service = await pool.query(
            "INSERT INTO services (  img, title , prix, decriptioncard, question, reponse,  question2, reponse2, question3, reponse3) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *",
            [  img, title , prix, decriptioncard, question, reponse,  question2, reponse2, question3, reponse3]
         );

         // Envoi de la réponse au client sous forme de JSON avec les données insérées
         res.json(service.rows[0]);
    } catch (err) {
        // Gestion des erreurs : affichage de l'erreur dans la console
        console.log(err.message);
    }
})

// get all the services
app.get('/services', async (req, res) => {
    try {
        // Exécute une requête SQL pour sélectionner toutes les lignes de la table 'services'
        const service = await pool.query("SELECT * FROM services");
        // Envoie la réponse au client sous forme de JSON avec les données sélectionnées
        res.json(service.rows);
    } catch (err) {
        // Gestion des erreurs : affichage de l'erreur dans la console
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
        // Récupération de l'identifiant (ID) de la requête URL
        const { id } = req.params;
        // Récupération des données du corps de la requête (req.body)
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
            // Exécution d'une requête SQL pour mettre à jour la ligne correspondant à l'ID donné dans la table 'services'
        const updateService = await pool.query(
            "UPDATE services SET img = $1, title = $2, prix = $3, descriptioncard = $4, question = $5, reponse = $6, question2 = $7, reponse2 = $8, question3 = $9, reponse3 = $10 WHERE service_id = $11",
         [ img, title , prix, decriptioncard, question, reponse,  question2, reponse2, question3, reponse3, id]);

        // Envoie une réponse JSON au client pour indiquer que le service a été mis à jour
        res.json("service is updated");
    } catch (err) {
        // Gestion des erreurs : affichage de l'erreur dans la console et envoi d'une réponse d'erreur au client avec le code d'état 500 (Erreur serveur)
        console.error(err.message);
        res.status(500).send("Erreur serveur");
    }
});

// delete a service
app.delete('/services/:id', async (req, res) => {
    try {
        // Récupération de l'identifiant (ID) à partir de l'URL
        const { id } = req.params;
        // Exécute une requête SQL pour supprimer la ligne dans la table 'services' où l'ID correspond à celui donné dans la requête
        const deleteService = await pool.query("DELETE FROM services WHERE service_id = $1", [id]);

        // Envoie une réponse JSON au client pour indiquer que le service a été supprimé avec succès
        res.json("service was deleted");
    } catch (err) {
        // Gestion des erreurs : affichage de l'erreur dans la console et envoi d'une réponse d'erreur au client avec le code d'état 500 (Erreur serveur)
        console.error(err.message);
        res.status(500).send("Erreur serveur");
    }
});

app.get('/me', (req, res) => {
    // Récupère le token JWT envoyé par le client depuis l'en-tête de la requête
    const token = req.headers.authorization.split(' ')[1]; // Le token est généralement envoyé dans l'en-tête avec le format 'Bearer TOKEN'

    // Vérifie le token JWT en utilisant la clé secrète ('secret_key' dans cet exemple)
    jwt.verify(token, 'secret_key', (err, decoded) => {
        if (err) {
            // Si le token n'est pas valide, renvoie un statut 401 (Non autorisé) au client avec un message d'erreur
            res.status(401).send({ message: "Unauthorized" });
        } else {
            // Si le token est valide, utilisez l'ID extrait du token pour interroger la base de données et récupérer les données de l'utilisateur
            db.query("SELECT * FROM users WHERE id = ?", [decoded.id], (err, result) => {
                if (err) {
                    // En cas d'erreur lors de la requête SQL, renvoie une réponse avec l'erreur au client
                    res.send({ err: err });
                } else {
                    // Si la requête SQL réussit, renvoie les données de l'utilisateur (première ligne du résultat) au client
                    res.send(result[0]);
                }
            });
        }
    });
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