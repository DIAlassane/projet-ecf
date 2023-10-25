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