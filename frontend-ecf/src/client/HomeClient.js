import React from 'react'
import Navbar from '../nav-footer/Navbar'
import CarCard from './CarCard'
import Header from '../component/Header'

import '../style/HomeClient.css'
import ServicesCard from './ServicesCard'

function HomeClient() {
  return (
    <div>
        <Navbar />
        <div>
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