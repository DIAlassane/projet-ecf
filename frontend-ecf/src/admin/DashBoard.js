import React from 'react'

function DashBoard() {
  return (
    <div>
        <div className="headerdashboard">
            <h1>Dashboard</h1>
            <h2>Garage V.Passot</h2>
        </div>
        <div className="dashboardbas">
            <div className="carsdashboard"></div>
            <div className="usersdashboard"></div>
            <div className="servicesdashboard"></div>
            <div className="horairesdashboard"></div>
        </div>
    </div>
  )
}

export default DashBoard