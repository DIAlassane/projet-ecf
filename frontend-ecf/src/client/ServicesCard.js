import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Pagination from '../component/Pagination';

import '../style/ServicesCard.css'

function ServicesCard() {
    const [services, setServices] = useState([]);
    const navigate = useNavigate();

    const [page, setPage] = useState(1);
    const itemsPerPage = 1; // Nombre d'éléments par page
  
      useEffect(() => {
        axios.get('http://localhost:4000/services')
        .then(result => setServices(result.data))
        .catch(err => console.log(err));
    }, []);
  
    const handleServicesSelect = (id) => {
      console.log(id)
      navigate(`/detailServices/${id}`);
    }

    const totalItems = services.length;

  return (
    <div>
      <Pagination page={page} setPage={setPage} itemsPerPage={itemsPerPage} totalItems={totalItems} />        
        <div className='nogridserv'>
            {services &&
            services.map((service, index) => {
              if (index >= (page - 1) * itemsPerPage && index < page * itemsPerPage) {
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
                }
            return null; // Ne rien afficher pour les éléments qui ne sont pas dans la plage de la page actuelle
            })}
        </div>
    </div>
  )
}

export default ServicesCard