import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import axios from "axios";

function UpdateUser() {
    const [role, setRole] = useState()
    const [name, setName] = useState()
    const [firstname, setFirstname] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [adresse, setAdresse] = useState()
    const [birth, setBirth] = useState()
    const [genre, setGenre] = useState()
    const [numsecu, setNumsecu] = useState()

    const navigate = useNavigate()

    const { id } = useParams()

    useEffect(() => {
        axios.get('http://localhost:4000/users/'+id)
        .then(result => {
          console.log(result)
          setRole(result.data.role)
          setName(result.data.name)
          setFirstname(result.data.firstname)
          setEmail(result.data.email)
          setPassword(result.data.password)
          setAdresse(result.data.adresse)
          setBirth(result.data.birth)
          setGenre(result.data.genre)
          setNumsecu(result.data.numsecu)
        })
        .catch(err => console.log(err))
      }, [])   
      
      const Update = (e) => {
        e.preventDefault()
        axios.put("http://localhost:4000/users/"+id, {
            role, 
            name, 
            birth, 
            adresse,  
            email, 
            numsecu,
            password, 
            firstname, 
            genre,
        })
        .then(result => {
          console.log(result)
          navigate('/users')
        })
        .catch(err => console.log(err))
      }    

  return (
    <div>
        <div className='ajouter'>
            <Link to='/users'>Retour</Link>
        <form className='formulaire' onSubmit={Update} action="">
          <h2 className='titrecu'>Mettre á jour utilisateur</h2>

          <div className='hautediv'>
            <input type="text" placeholder='Entrer rôle' 
            onChange={(e) => setRole(e.target.value)}/>
            <input type="text" placeholder='Enter un nom' 
            onChange={(e) => setName(e.target.value)}/>
          </div>
          <div className='divfirstname'>
            <input type="text" placeholder='Enter un prénom' 
            onChange={(e) => setFirstname(e.target.value)}/>
            <input type="email" placeholder='Entrer un email' 
            onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder='Mot-de-passe' 
            onChange={(e) => setPassword(e.target.value)}/>
            <input type="text" placeholder='Numéro de sécurité social' 
            onChange={(e) => setNumsecu(e.target.value)}/>
          </div>
          <div className='divbas'>
            <input type="text" placeholder='Adresse' 
            onChange={(e) => setAdresse(e.target.value)}/>
            <input type="date" placeholder='Année de naissance' 
            onChange={(e) => setBirth(e.target.value)}/>
            <input type="text" placeholder='Genre' 
            onChange={(e) => setGenre(e.target.value)}/>
          </div>
            <div className="btncud">
              <button className='btncu'>Ajouter</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default UpdateUser