import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function AddHoraire() {
    const [mois, setMois] = useState()
    const [semaine, setSemaine] = useState()
    const [jour, setJour] = useState()
    const [ouverturematine, setOuverturematine] = useState()
    const [fermeturematine, setFermeturematine] = useState()
    const [ouverturesoire, setOuverturesoire] = useState()
    const [fermeturesoire, setFermeturesoire] = useState()

    const navigate = useNavigate()

  const Submit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:4000/horaires", {
        mois,
        semaine,
        jour,
        ouverturematine,
        fermeturematine,
        ouverturesoire,
        fermeturesoire
    })
    .then(result => {
      console.log(result)
      navigate('/horaires')
    })
    .catch(err => console.log(err))
  }

  return (
    <div>
        <div className='addhoraire'>
            <Link to='/'>Retour</Link>
        <form className='horaireform' onSubmit={Submit} action="">
          <h2 className='titrecu'>Ajouter un utilisateur</h2>

          <div className='horairesdiv'>
            <input type="text" placeholder='Entrer Mois' 
            onChange={(e) => setMois(e.target.value)}/>
            <input type="text" placeholder='Enter une semaine' 
            onChange={(e) => setSemaine(e.target.value)}/>
            <input type="text" placeholder='Enter un jour' 
            onChange={(e) => setJour(e.target.value)}/>
            <input type="text" placeholder='Ouverture Matinée' 
            onChange={(e) => setOuverturematine(e.target.value)}/>
            <input type="text" placeholder='Fermeture Matinée' 
            onChange={(e) => setFermeturematine(e.target.value)}/>
            <input type="text" placeholder='Ouverture Soirée' 
            onChange={(e) => setOuverturesoire(e.target.value)}/>
            <input type="text" placeholder='Fermeture Soirée' 
            onChange={(e) => setFermeturesoire(e.target.value)}/>
          </div>
            <div className="btncud">
              <button className='btncu'>Ajouter</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default AddHoraire