import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../style/CarCard.css'

function CarCard() {
    const [cars, setCars] = useState([]);
    const navigate = useNavigate();
  
      useEffect(() => {
        axios.get('http://localhost:4000/addcar')
        .then(result => setCars(result.data))
        .catch(err => console.log(err));
    }, []);
  
    const handleCarSelect = (id) => {
      console.log(id)
      navigate(`/detailCar/${id}`);
    }
  
  return (
    <div>
        <div className='grid'>
            {cars &&
            cars.map((car) => {
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
            })}
        </div>

    </div>
  )
}

export default CarCard