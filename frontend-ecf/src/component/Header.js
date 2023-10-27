import React from 'react';
import HeaderLogo from '../assets/GARAGELOGO-removebg-preview.png';

import '../style/Header.css'

function Header() {
  return (
    <div>
        <div className="header">
            <img src={HeaderLogo} alt="" />
            <div className="textheader">
                <h3>Vincent Parrot, fort de ses 15 années d'expérience dans la réparation automobile, a ouvert
                son propre garage à Toulouse en 2021.</h3>
                <p>Depuis 2 ans, il propose une large gamme de services: réparation de la carrosserie et de la
                mécanique des voitures ainsi que leur entretien régulier pour garantir leur performance et
                leur sécurité. De plus, le Garage V. Parrot met en vente des véhicules d'occasion afin
                d'accroître son chiffre d'affaires.</p>
            </div>
        </div>
    </div>
  )
}

export default Header