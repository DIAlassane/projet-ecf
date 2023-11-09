import React, { useState } from 'react'
import Validation from '../protection/Validation';
import axios from 'axios';

import '../style/ContactForm.css'

function ContactForm() {
    const [values, setValues] = useState({
        nom: '',
        prenom: '',
        email: '',
        numero: ''
    })

    const [errors, setErrors] = useState({})

    function handleInput(event) {
        const {name, value} = event.target;
        setValues((prev) => {
            return { ...prev, [name]: value }
        });
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();

        // Validez les champs
        const validationErrors = Validation(values);
        setErrors(validationErrors);

        // Si aucune erreur de validation, soumettez les données
        if (Object.keys(validationErrors).length === 0) {
            // Effectuez l'appel axios.post ici
            axios.post("http://localhost:4000/contactus", values)
                .then(result => {
                    alert("Vous avez bien soumis le formulaire")
                    console.log(result);
                    window.location.reload();
                })
                .catch(err => console.log(err));
        }
        
    }

  return (
    <div>
        <div className="contactform">
            <h4>Contact</h4>
            <form className='formcontact' onSubmit={handleSubmit} action="">
                <input 
                type="text"
                placeholder='Entrer vôtre Nom'
                name='nom'
                onChange={handleInput} />
                {errors.nom && <p style={{color: "red"}}>{errors.nom}</p>}

                <input 
                type="text"
                placeholder='Entrer vôtre Prénom'
                name='prenom'
                onChange={handleInput} />
                {errors.prenom && <p style={{color: "red"}}>{errors.prenom}</p>}

                <input 
                type="text"
                placeholder='Entrer vôtre mail'
                name='email'
                onChange={handleInput} />
                {errors.email && <p style={{color: "red"}}>{errors.email}</p>}

                <input 
                type="text"
                placeholder='Entrer vôtre numéro'
                name='numero'
                onChange={handleInput} />
                {errors.numero && <p style={{color: "red"}}>{errors.numero}</p>}

                <div className="contactbtn">
                    <button type='submit'>Soumettre</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default ContactForm