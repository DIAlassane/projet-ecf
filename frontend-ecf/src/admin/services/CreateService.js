import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

import '../../style/CreateService.css'

function CreateService() {
    const [img, setImg] = useState()
    const [title, setTitle] = useState()
    const [prix, setPrix] = useState()
    const [decriptioncard, setdecriptioncard] = useState()
    const [question, setQuestion] = useState()
    const [question2, setQuestion2] = useState()
    const [question3, setQuestion3] = useState()
    const [reponse, setReponse] = useState()
    const [reponse2, setReponse2] = useState()
    const [reponse3, setReponse3] = useState()

    const navigate = useNavigate()

  const Submit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:4000/services", {
        img, 
        title, 
        prix, 
        decriptioncard, 
        question, 
        reponse,  
        question2, 
        reponse2, 
        question3, 
        reponse3
    })
    .then(result => {
      console.log(result)
      navigate('/services')
    })
    .catch(err => console.log(err))
  }

  return (
    <div>
        <div className='ajouterservice'>
            <Link to='/services'>Retour</Link>
        <form className='formulaire' onSubmit={Submit} action="">
          <h2 className='titrecu'>Ajouter un service</h2>

          <div className='hautediv'>
            <input type="text" placeholder='Url image' 
            onChange={(e) => setImg(e.target.value)}/>
            <input type="text" placeholder='Enter un titre' 
            onChange={(e) => setTitle(e.target.value)}/>            
            <input type="text" placeholder='Enter un prix' 
            onChange={(e) => setPrix(e.target.value)}/>
          </div>

          <div className="desc">
            <input type="text" placeholder='Entrer une description card' 
            onChange={(e) => setdecriptioncard(e.target.value)}/>
          </div>

          <div className='divquestion'>
            <input type="text" placeholder='Question' 
            onChange={(e) => setQuestion(e.target.value)}/>
            <input type="text" placeholder='Réponse' 
            onChange={(e) => setReponse(e.target.value)}/>
          </div>

          <div className="divquestion">
            <input type="text" placeholder='Question 2' 
            onChange={(e) => setQuestion2(e.target.value)}/>
            <input type="text" placeholder='Réponse 2' 
            onChange={(e) => setReponse2(e.target.value)}/>
          </div>

          <div className='divquestion'>
            <input type="text" placeholder='Question 3' 
            onChange={(e) => setQuestion3(e.target.value)}/>
            <input type="text" placeholder='Réponse 3' 
            onChange={(e) => setReponse3(e.target.value)}/>
          </div>

            <div className="btncud">
              <button className='btncu'>Ajouter</button>
            </div>
        </form>
      </div>

    </div>
  )
}

export default CreateService