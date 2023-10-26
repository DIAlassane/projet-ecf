import React from 'react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function Cars() {
    const [cars, setCars] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3002/addcar')
        .then(result => setCars(result.data))
        .catch(err => console.log(err))
    }, [])

    const handleDelete = (id) => {
        axios.delete('http://localhost:3002/addcar/'+id)
        .then(res => {
            console.log(res)
            window.location.reload()
        })
        .catch(errr => console.log(errr))
    }


  return (
    <div>
                <a href="/dashboard">Dashboard</a>
        <div className='carlist'>
            <h2>Liste de nos voitures</h2>
            <Link to="/addcar" >Ajouter +</Link>
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
                    users.map((car) => {
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
                                <Link to={`/updateUser/${user._id}`}>MAJ</Link>
                                <button className='delete' onClick={(e) => handleDelete(user._id)}>
                                    Supprimer
                                </button>
                            </td>
                        </tr>)
                    })
                    }
                </tbody>
            </table>
            <Link to='/homeClient'>FrontUsers</Link>
        </div>
    </div>
  )
}

export default Cars