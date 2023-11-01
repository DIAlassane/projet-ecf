CREATE DATABASE perngarage;

CREATE TABLE garage(
    car_id SERIAL PRIMARY KEY,
    marque VARCHAR(255),
    modele VARCHAR(255),
    carburant VARCHAR(255),
    nbporte VARCHAR(255),
    couleur VARCHAR(255),
    vitessmax VARCHAR(255),
    anneesortie VARCHAR(255),
    prix VARCHAR(255),
    urlimg VARCHAR(755),
    urlimgban VARCHAR(755)
);

CREATE TABLE connexion(
    user_id SERIAL PRIMARY KEY,
    role VARCHAR(255),
    name VARCHAR(255),
    firstname VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255),
    adresse VARCHAR(255),
    birth VARCHAR(255),
    numsecu VARCHAR(255),
    genre VARCHAR(755)
);

CREATE TABLE services(
    service_id SERIAL PRIMARY KEY,
    img VARCHAR(755),
    title VARCHAR(255),
    prix VARCHAR(255),
    decriptioncard VARCHAR(355),
    question VARCHAR(255),
    reponse VARCHAR(255),
    question2 VARCHAR(255),
    reponse2 VARCHAR(655),
    question3 VARCHAR(255),
    reponse3 VARCHAR(755)
);

CREATE TABLE horaires(
    horaires_id SERIAL PRIMARY KEY,
    mois VARCHAR(55),
    semaine VARCHAR(15),
    jour VARCHAR(55),
    ouverturematine VARCHAR(55),
    fermeturematine VARCHAR(55),
    ouverturesoire VARCHAR(55),
    fermeturesoire VARCHAR(55)
);

CREATE TABLE contact(
    contact_id SERIAL PRIMARY KEY,
    email VARCHAR(350),
    numero VARCHAR(20),
    nom VARCHAR(200),
    prenom VARCHAR(200)
);

CREATE TABLE devis(
    devis_id SERIAL PRIMARY KEY,
    plaque VARCHAR(20),
    ville VARCHAR(80),
    nom VARCHAR(100)
);