import React from 'react';
import imgGarantie from '../assets/Garantieconstructeur.png'
import imgTransDevis from '../assets/Devissur.png'
import imgDevisChrono from '../assets/Devis24h.png'
import imgPrestMilti from '../assets/Prestationsmultimarques.png'

import '../App.css'

function NosEngagement() {
  return (
    <div>
        <div className="engagement">
            <h2>Nos Engagements</h2>
            <div className="tousengagements">
                <div className="divengagement">
                    <img src={imgGarantie} alt="" />
                    <h3>GARANTIE CONSTRUCTEUR PRÉSERVÉE</h3>
                </div>
                <div className="divengagement">
                    <img src={imgTransDevis} alt="" />
                    <h3>TRANSPARENCE DES DEVIS</h3>
                </div>
                <div className="divengagement">
                    <img src={imgDevisChrono} alt="" /> 
                    <h3>DEVIS ET RDV 24/24</h3>  
                </div>
                <div className="divengagement">
                    <img src={imgPrestMilti} alt="" />
                    <h3>PRESTATION TECHNIQUES MULTIMARQUES</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NosEngagement