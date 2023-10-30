import React from 'react'
import Navbar from '../nav-footer/Navbar'
import CarCard from './CarCard'
import Header from '../component/Header'
import { Link } from 'react-router-dom'

import '../style/HomeClient.css'
import ServicesCard from './ServicesCard'

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
          <h1>Services</h1>
          <div className="containerservice">
            <ServicesCard />
          </div>
        </div>
        <div className="container">
          <CarCard />
        </div>
    </div>
  )
}

export default HomeClient