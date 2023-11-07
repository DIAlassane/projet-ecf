import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../style/CarCard.css'
import Pagination from '../component/Pagination';

function CarCard() {
    const [cars, setCars] = useState([]);
    const navigate = useNavigate();

    const [page, setPage] = useState(1);
    const itemsPerPage = 3; // Nombre d'éléments par page
  
      useEffect(() => {
        axios.get('http://localhost:4000/addcar')
        .then(result => setCars(result.data))
        .catch(err => console.log(err));
    }, []);
  
    const handleCarSelect = (id) => {
      console.log(id)
      navigate(`/detailCar/${id}`);
    }

    const totalItems = cars.length;
  
  return (
    <div>
<Pagination page={page} setPage={setPage} itemsPerPage={itemsPerPage} totalItems={totalItems} />        
    <div className='grid'>
      {cars &&
        cars.map((car, index) => {
            if (index >= (page - 1) * itemsPerPage && index < page * itemsPerPage) {
                return (                
                  <div className='card' key={car.car_id} onClick={() => handleCarSelect(car.car_id)}>
                      <div className="prix">
                          <h5>{car.prix} $</h5>
                      </div>
                      <img src={car.urlimg} alt="" />
                      <div className='mini-details-card'>
                          <div className="marmod">
                          <h3>{car.marque}</h3>
                          <p>{car.modele}</p>
                          <h6>{car.anneesortie}</h6>
                          <h6>{car.vitessmax}</h6>
                          <hr />
                          <h6>{car.prix} $</h6>
                          </div>
                      </div>
                  </div>          
                  );
                    }
                    return null; // Ne rien afficher pour les éléments qui ne sont pas dans la plage de la page actuelle
                })}
        </div>
        {/* <Pagination page={page} setPage={setPage} itemsPerPage={itemsPerPage} totalItems={totalItems} />     */}
    </div>
  )
}

export default CarCard