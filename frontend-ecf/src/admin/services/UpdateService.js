import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import axios from "axios";

function UpdateService() {
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

    const { id } = useParams()

    useEffect(() => {
        axios.get('http://localhost:4000/services/'+id)
        .then(result => {
          console.log(result)
          setImg(result.data.img)
          setTitle(result.data.title)
          setPrix(result.data.prix)
          setdecriptioncard(result.data.decriptioncard)
          setQuestion(result.data.question)
          setQuestion2(result.data.question2)
          setQuestion3(result.data.question3)
          setReponse(result.data.reponse)
          setReponse2(result.data.reponse2)
          setReponse3(result.data.reponse3)
        })
        .catch(err => console.log(err))
      }, [])   
      
      const Update = (e) => {
        e.preventDefault()
        axios.put("http://localhost:4000/services/"+id, {
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
        <form className='formulaire' onSubmit={Update} action="">
          <h2 className='titrecu'>Mettre-á-jour un service</h2>

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

export default UpdateService