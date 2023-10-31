import React from 'react'
import { Link } from 'react-router-dom'

import './Footer.css'

function Footer() {
  return (
    <div>
        <div className="footer">
            <div className="navfooter">
                <Link to='/'>Tout nos modéles</Link>
                <Link to='/'>Toutes nos réparation</Link>
                <Link to='/'>Contact</Link>
                <Link to='/'>A-propos</Link>
            </div>
            <div className="ville">
                <h2>Garage V.Parrot en ville</h2>
                <p>Paris</p>
                <p>Nantes</p>
                <p>Tours</p>
                <p>Marseille</p>
                <p>Lyon</p>
                <p>Bordeaux</p>
            </div>
            <div className="apropos">
                <h3>News-Letter</h3>
                <h3>Rejoindre le réseaux</h3>
            </div>
        </div>
    </div>
  )
}

export default Footer