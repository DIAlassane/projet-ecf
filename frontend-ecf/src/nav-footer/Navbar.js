import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  return (
    <div>
        <div className="navbar">
            <Link to='/homeClient'><h2 className="logo">Garage V.Parrot</h2></Link>
            
            <div className="navlinks">
                <Link to='/dashBoard' >Dashbord</Link>
                <Link to='/contact' >Contact</Link>
                <Link to='/' >A-propos</Link>
                <Link to='/login' >Se connecter</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar