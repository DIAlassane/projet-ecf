import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'

function DetailCar() {
    const { id } = useParams();
    const [cars, setCars] = useState();
    
    console.log(id)
    useEffect(() => {
      axios.get(`http://localhost:4000/addcar/${id}`)
        .then((response) => {
          setCars(response.data);
        })
        .catch((error) => {
          console.error("Erreur lors de la récupération des détails des voitures :", error);
        });
    }, [id]);

  return (
    <div>
                        <div className='frontdetails' key={cars && cars.modele}>
                    <div className="banniere">
                        <img src={cars && cars.urlimgban} alt="" />
                    </div>
                    <div className="miniglobe">
                        <img src={cars && cars.urlimg} alt="" />
                        <div className="dcard">
                            <a href="/cars">cars</a>
                            <h3>{cars && cars.modele}</h3>
                            <h4>Prix : {cars && cars.prix}$</h4>
                            <h4>Couleur : {cars && cars.couleur}</h4>
                            <div className="dcar">
                                <div className="detun">
                                    <p>Boîte de vitesse : {cars && cars.vitessmax}</p>
                                    <p>Année de sortie : {cars && cars.anneesortie}</p>
                                </div>
                                <div className="detdeux">
                                    <p>Nombre de porte : {cars && cars.nbporte}</p>
                                    <p>Carburant : {cars && cars.carburant}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                             

    </div>
  )
}

export default DetailCar