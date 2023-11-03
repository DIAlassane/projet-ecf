import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const LogBus = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loginus, setLoginus] = useState("");

    const logout = () => {
        localStorage.clear();
        }

    const navigate = useNavigate();

    axios.defaults.withCredentials = true;

    const login = (e) => {
        e.preventDefault();
        axios.post("http://localhost:4000/login", {
            email: email,
            password: password,
        }).then((response) => {
            console.log(response.data)
            if (response.data.message) {
                setLoginus(response.data.message)
            } else {
                setLoginus(response.data[0].email);
                // Stockez l'objet utilisateur complet dans le localStorage
                localStorage.setItem('user', JSON.stringify(response.data[0]));
                navigate('/dashboardemp');
            }
        })
    }

  return (
    <div>
        <form className="login"
        onSubmit={login}>
            <h1>Se connecter</h1>
            <input type="text" placeholder='email'
            onChange={(e) => {setEmail(e.target.value)}} />
            <input type="text" placeholder='password'
            onChange={(e) => {setPassword(e.target.value)}} />
                        
            <button>Se connecter</button>

            <h1>{loginus}</h1>

            <a onClick={logout} href="/"> Logout</a>
        </form>
    </div>
  )
}
