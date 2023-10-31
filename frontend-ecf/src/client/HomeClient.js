import React from 'react'
import Navbar from '../nav-footer/Navbar'
import CarCard from './CarCard'
import Header from '../component/Header'
import { Link } from 'react-router-dom'

import '../style/HomeClient.css'
import ServicesCard from './ServicesCard'
import NosEngagement from '../component/NosEngagement'
import Footer from '../nav-footer/Footer'

function HomeClient() {
  return (
    <div>
        <Navbar />
        <div>
          <div className="vparrotlinks">
            <Link to='/allCars'>Nos voitures</Link>
            <Link to='/allCars'>Nos Services</Link>
          </div>
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
        <Footer />
    </div>
  )
}

export default HomeClient