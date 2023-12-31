import React from 'react'
import Navbar from '../nav-footer/Navbar'
import CarCard from './CarCard'
import Header from '../component/Header'

import '../style/HomeClient.css'
import ServicesCard from './ServicesCard'
import NosEngagement from '../component/NosEngagement'
import Footer from '../nav-footer/Footer'
import HoraireCard from './HoraireCard'

function HomeClient() {
  return (
    <div>
        <Navbar />
        <div>
          <Header />
        </div>
        <div className="servicescont">
          <h1 className='titreservice'><span>PRENDRE SOIN AVEC VOUS</span> <br />
          DE VÔTRE VÉHICULE</h1>
          <div className="containerservice">
            <ServicesCard />
          </div>
        </div>
        <div className="engaged">
          <NosEngagement />
        </div>
        <div className="container">
          <h1>Nos Voitures</h1>
          <CarCard />
        </div>
        <div className="horairehome">
          <HoraireCard />
        </div>
        <Footer />
    </div>
  )
}

export default HomeClient