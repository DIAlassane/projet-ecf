import React, { useState } from 'react'
import Validation from './Validation';

import '../style/ContactForm.css'

function ContactForm() {
    const [values, setValues] = useState({
        name: '',
        firstname: '',
        email: '',
        tel: ''
    })

    const [errors, setErrors] = useState({})

    function handleInput(event) {
        const newObj = {...values, [event.target.name]: event.target.value}
        setValues(newObj)
    }

    function handleValidation(event) {
        event.preventDefault();
        setErrors(Validation(values));
    }

  return (
    <div>
        <div className="contactform">
            <h4>Contact</h4>
            <form className='formcontact' onSubmit={handleValidation} action="">
                <input 
                type="text"
                placeholder='Entrer vôtre Nom'
                name='name'
                onChange={handleInput} />
                {errors.name && <p style={{color: "red"}}>{errors.name}</p>}

                <input 
                type="text"
                placeholder='Entrer vôtre Prénom'
                name='firstname'
                onChange={handleInput} />
                {errors.firstname && <p style={{color: "red"}}>{errors.firstname}</p>}

                <input 
                type="text"
                placeholder='Entrer vôtre mail'
                name='email'
                onChange={handleInput} />
                {errors.email && <p style={{color: "red"}}>{errors.email}</p>}

                <input 
                type="text"
                placeholder='Entrer vôtre numéro'
                name='tel'
                onChange={handleInput} />
                {errors.tel && <p style={{color: "red"}}>{errors.tel}</p>}

                <div className="contactbtn">
                    <button>Soumettre</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default ContactForm