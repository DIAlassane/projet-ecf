import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  return (
    <div>
        <div className="navbar">
            <Link to='homeClient'><h2 className="logo">Garage V.Parrot</h2></Link>
            
            <div className="navlinks">
                <Link to='/' >Dashbord</Link>
                <Link to='/' >Contact</Link>
                <Link to='/' >A-propos</Link>
                <Link to='/' >Services</Link>
                <Link to='/Connexion' >Se connecter</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar