import React from 'react'

import '../style/DashBoard.css'
import { LogoutBtn } from '../login/LogOutBtn'

function DashBoard() {
  return (
    <div>
        <div className="headerdashboard">
            <h1>Dashboard</h1>
            <h2>Garage V.Parrot</h2>
        </div>
        <div className='block'>
          <div className="dashboardbas">
            <a className='logodashboard' href="/"><div className="carsdashboard"></div></a>
            <a className='logodashboard' href="/users"><div className="usersdashboard"></div></a>
            <a className='logodashboard' href="/services"><div className="servicesdashboard"></div></a>
            <a className='logodashboard' href="/horaires"><div className="horairesdashboard"></div></a>
          </div>
          <div className="basdash">
            <a href="/contactus">Les demandes de contact</a>
          </div>
          <LogoutBtn />
        </div>
        
    </div>
  )
}

export default DashBoard