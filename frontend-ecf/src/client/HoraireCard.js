import React, { useEffect, useState } from 'react'
import axios from 'axios';

import '../style/HoraireCard.css'

function HoraireCard() {
    const [horaires, setHoraires] = useState([]);
  
      useEffect(() => {
        axios.get('http://localhost:4000/horaires')
        .then(result => setHoraires(result.data))
        .catch(err => console.log(err));
    }, []);

  return (
    <div>
        <div className='gridhoraire'>
      {horaires &&
        horaires.map((horaire) => {
                return (                
                  <div className='horairecard' >
                      <div className="tophoraire">
                          <h5>{horaire.mois} <br />
                          Semaine {horaire.semaine} : 
                          <br />{horaire.jour}</h5>
                      </div>
                      <div className='mini-details-horaire'>
                          <div className="horaire">
                            <p>{horaire.ouverturematine}</p>
                            <p>{horaire.fermeturematine}</p>
                            <br />
                            <p>{horaire.ouverturesoire}</p>
                            <p>{horaire.fermeturesoire}</p>
                          </div>
                      </div>
                  </div>          
                  );
                })}
        </div>
    </div>
  )
}

export default HoraireCard