import React, { useContext } from 'react'
import { BtnLogOut } from '../login/BtnLogOut'

import '../style/DashBoard.css'
import { AuthContext } from '../protection/AuthContext';

function DashBoard() {
  const { currentUser } = useContext(AuthContext);


  return (
    <div>
        <div className="headerdashboard">
            <h1>Dashboard</h1>
            <h2>Garage V.Parrot</h2>
            <div className="infoadmin">
              <h2>{currentUser?.name} {currentUser?.firstname}</h2>
              <div className="emailrole">
                <p>{currentUser?.email}</p>
                <p>{currentUser?.role}</p>
              </div>
            </div>
        </div>
        <div className='block'>
          <div className="dashboardbas">
            <a className='logodashboard' href="/cars"><div className="carsdashboard"></div></a>
            <a className='logodashboard' href="/users"><div className="usersdashboard"></div></a>
            <a className='logodashboard' href="/services"><div className="servicesdashboard"></div></a>
            <a className='logodashboard' href="/horaires"><div className="horairesdashboard"></div></a>
          </div>
          <div className="basdash">
            <a href="/contactus">Les demandes de contact</a>
          </div>
          <BtnLogOut />
        </div>
        
    </div>
  )
}

export default DashBoard