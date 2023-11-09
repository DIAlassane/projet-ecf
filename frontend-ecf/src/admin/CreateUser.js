import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function CreateUser() {
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

  const Submit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:4000/users", {
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
        <form className='formulaire' onSubmit={Submit} action="">
          <h2 className='titrecu'>Ajouter un utilisateur</h2>

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

export default CreateUser