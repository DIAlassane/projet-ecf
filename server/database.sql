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