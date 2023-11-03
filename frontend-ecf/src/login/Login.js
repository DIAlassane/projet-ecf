import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('')
    const [error, setError] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
                let userData = {
                    email:email,
                    role:role,
                    password:password
                }
        console.log("Clicked on login")

        axios.post("http://localhost:4000/users/login", userData, {
            method: "POST",
            widthCredentials: "include",
            headers: {
                "content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        })
        .then(response => {
            console.log(response.data);
            navigate('/main');
        })

        e.target.reset();
        e.preventDefault();
        if( email.length === 0 || password.length < 8 ) {
            setError(true);
        };
    }

  return (
    <div className="body-login">
        <div className='login-form3'>
            <h2>Login Page</h2>
            <form 
            onSubmit={handleSubmit} 
            id='clear-form' >
                <div >
                    <input type="email" 
                    className='input3'
                    placeholder='Email'
                    onChange={e=>setEmail(e.target.value)} />
                </div>
                {error&&email.length<=0?
                <label >Veuillez remplire ce champ</label>: ""}
                <div>
                    <input type="password" 
                    className='input3'
                    placeholder='Password'
                    onChange={e=>setPassword(e.target.value)} />
                </div>
                {error&&password.length < 8?
                <label >Veuillez remplire ce champ</label>: ""}
                <div>
                    <input type="password" 
                    className='input3'
                    placeholder='role'
                    onChange={e=>setRole(e.target.value)} />
                </div>
                <div>
                    <button className='button3'>Se connecter</button>
                </div>
            </form>
            <div className="transit">
                <a href="/" >Retour</a>
            </div>
        </div>
    </div>
  )
}

export default Login