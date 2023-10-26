import React from 'react'
import Navbar from '../nav-footer/Navbar'
import DetailCar from './DetailCar'

function HomeClient() {
  return (
    <div>
        <Navbar />
        <div className="container">
            <DetailCar />
        </div>
    </div>
  )
}

export default HomeClient