import React, { useContext } from 'react'
import { AuthContext } from '../protection/AuthContext';

import '../style/DashBoard.css'
import { BtnLogOut } from '../login/BtnLogOut';

export const DashEmployer = () => {
    const { currentUser } = useContext(AuthContext);

  return (
    <div className='dashemp'>
        <div className="flex">
            <div className="basdash">
                <a href="/contactus">Les demandes de contact</a>
            </div>
            <div className="gauchedsh">
                <h2>Bienvenue {currentUser?.name} {currentUser?.firstname}</h2>
                <p>Role : {currentUser?.role}</p>
            </div>
        </div>
        <div className='block'>
        <div className="dashboardbas">
            <a className='logodashboard' href="/cars"><div className="carsdashboard"></div></a>
            <a className='logodashboard' href="/services"><div className="servicesdashboard"></div></a>
        </div>
        </div>
        <BtnLogOut />
    </div>
  )
}
