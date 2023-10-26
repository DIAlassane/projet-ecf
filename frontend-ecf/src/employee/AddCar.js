import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

import '../style/AddCar.css'

function AddCar() {
    const [marque, setMarque] = useState()
    const [modele, setModele] = useState()
    const [prix, setPrix] = useState()
    const [vitessmax, setVitessmax] = useState()
    const [anneesortie, setAnneesortie] = useState()
    const [nbporte, setNbporte] = useState()
    const [carburant, setCarburant] = useState()
    const [urlimg, setUrlimg] = useState()
    const [urlimgban, setUrlimgban] = useState()
    const [couleur, setCouleur] = useState()

    const navigate = useNavigate()

  const Submit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:4000/addcar", {
        marque, 
        modele, 
        carburant, 
        nbporte, 
        couleur, 
        vitessmax, 
        anneesortie, 
        prix, 
        urlimg, 
        urlimgban
    })
    .then(result => {
      console.log(result)
      navigate('/')
    })
    .catch(err => console.log(err))
  }

  return (
    <div>
        <div className='ajouter'>
            <Link to='/'>Retour</Link>
        <form className='formulaire' onSubmit={Submit} action="">
          <h2 className='titrecu'>Ajouter une voiture</h2>

          <div className='hautediv'>
            <input type="text" placeholder='Entrer marque' 
            onChange={(e) => setMarque(e.target.value)}/>
            <input type="text" placeholder='Enter modele' 
            onChange={(e) => setModele(e.target.value)}/>
          </div>
          <div className='divprix'>
            <input type="text" placeholder='Prix' 
            onChange={(e) => setPrix(e.target.value)}/>
            <input type="text" placeholder='Boîte de vitesse' 
            onChange={(e) => setVitessmax(e.target.value)}/>
            <input type="text" placeholder='Année' 
            onChange={(e) => setAnneesortie(e.target.value)}/>
          </div>
          <div className='divbas'>
            <input type="number" placeholder='Nombre de porte' 
            onChange={(e) => setNbporte(e.target.value)}/>
            <input type="text" placeholder='Type de carburant' 
            onChange={(e) => setCarburant(e.target.value)}/>
            <input type="text" placeholder='URL image' 
            onChange={(e) => setUrlimg(e.target.value)}/>
            <input type="text" placeholder='URL bannière' 
            onChange={(e) => setUrlimgban(e.target.value)}/>
            <input type="text" placeholder='Couleur' 
            onChange={(e) => setCouleur(e.target.value)}/>
          </div>
            <div className="btncud">
              <button className='btncu'>Ajouter</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default AddCar