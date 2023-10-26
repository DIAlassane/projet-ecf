import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import '../style/Cars.css'

function Cars() {
    const [cars, setCars] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4000/addcar')
        .then(result => setCars(result.data))
        .catch(err => console.log(err))
    }, [])

    const handleDelete = (id) => {
        axios.delete('http://localhost:4000/addcar/'+id)
        .then(res => {
            console.log(res)
            window.location.reload()
        })
        .catch(errr => console.log(errr))
    }


  return (
    <div className='container'>
        <a className='btndash' href="/dashBoard">Dashboard</a>
        <div className='carlist'>
            <h2>Liste de nos voitures</h2>
            <div className="btncarlist">
                <Link to="/addcar" >Ajouter +</Link>
                <Link to='/homeClient'>HomeClient</Link>
            </div>
            
            <table>
                <thead>
                    <tr>
                        <th>Marque</th>
                        <th>Modèle</th>
                        <th>Prix</th>
                        <th>B/V</th>
                        <th>Sortie</th>
                        <th>Nb Porte</th>
                        <th>Carburant</th>
                        <th>Couleur</th>
                        <th>Url</th>
                        <th>Url bannière</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    cars.map((car) => {
                        return (
                        <tr>
                            <td>{car.marque}</td>
                            <td>{car.modele}</td>
                            <td>{car.prix}</td>
                            <td>{car.vitessmax}</td>
                            <td>{car.anneesortie}</td>
                            <td>{car.nbporte}</td>
                            <td>{car.carburant}</td>
                            <td>{car.couleur}</td>
                            <td>{car.urlimg}</td>
                            <td>{car.urlimgban}</td>
                            <td>
                                <Link className='btnedit' to={`/editcar/${car.car_id}`}>MAJ</Link>
                                <button className='delete' onClick={(e) => handleDelete(car.car_id)}>
                                    Supprimer
                                </button>
                            </td>
                        </tr>)
                    })
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Cars