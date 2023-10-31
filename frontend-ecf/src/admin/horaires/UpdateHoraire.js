import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import axios from "axios";

function UpdateHoraire() {
    const [mois, setMois] = useState()
    const [jour, setJour] = useState()
    const [semaine, setSemaine] = useState()
    const [ouverturematine, setOuverturematine] = useState()
    const [fermeturematine, setFermeturematine] = useState()
    const [ouverturesoire, setOuverturesoire] = useState()
    const [fermeturesoire, setFermeturesoire] = useState()

    const navigate = useNavigate()

    const { id } = useParams()

    useEffect(() => {
        axios.get('http://localhost:4000/horaires/'+id)
        .then(result => {
          console.log(result)
          setMois(result.data.mois)
          setJour(result.data.jour)
          setSemaine(result.data.semaine)
          setOuverturematine(result.data.ouverturematine)
          setFermeturematine(result.data.fermeturematine)
          setOuverturesoire(result.data.ouverturesoire)
          setFermeturesoire(result.data.fermeturesoire)
        })
        .catch(err => console.log(err))
      }, [])   
      
      const Update = (e) => {
        e.preventDefault()
        axios.put('http://localhost:4000/horaires/'+id, {
            mois, 
            jour,   
            semaine,
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
            <Link to='/horaires'>Retour</Link>
        <form className='horaireform' onSubmit={Update} action="">
          <h2 className='titrecu'>Mettre a jour l'horaire</h2>

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

export default UpdateHoraire