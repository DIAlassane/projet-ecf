import React from 'react'
import Navbar from '../nav-footer/Navbar'
import CarCard from './CarCard'

import '../style/HomeClient.css'

function HomeClient() {
  return (
    <div>
        <Navbar />
        <div className="container">
                <CarCard />
        </div>
    </div>
  )
}

export default HomeClient