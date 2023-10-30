import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import '../style/ServicesCard.css'

function ServicesCard() {
    const [services, setServices] = useState([]);
    const navigate = useNavigate();
  
      useEffect(() => {
        axios.get('http://localhost:4000/services')
        .then(result => setServices(result.data))
        .catch(err => console.log(err));
    }, []);
  
    const handleServicesSelect = (id) => {
      console.log(id)
      navigate(`/detailServices/${id}`);
    }

  return (
    <div>
        <div className='nogridserv'>
            {services &&
            services.map((service) => {
                return (
            <div className='cardserv' key={service.service_id} onClick={() => handleServicesSelect(service.service_id)}>
                <div className="cardimgprix">
                    <img src={service.img} alt="" />
                </div>

                <div className='mini-details-card-serv'>
                    <div className="titredesc">
                    <h3>{service.title}</h3>
                    <p>{service.decriptioncard}</p>
                    </div>
                    <div className="prixserv">
                        <h4>{service.prix} $</h4>
                    </div> 
                </div>
            </div>
            );
            })}
        </div>
    </div>
  )
}

export default ServicesCard