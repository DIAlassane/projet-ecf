import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function THoraires() {
    const [horaires, setHoraires] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4000/horaires')
        .then(result => setHoraires(result.data))
        .catch(err => console.log(err))
    }, [])

    const handleDelete = (id) => {
        axios.delete('http://localhost:4000/horaires/'+id)
        .then(res => {
            console.log(res)
            window.location.reload()
        })
        .catch(errr => console.log(errr))
    }

  return (
    <div>
        <div className='containeruser'>
        <a className='btndash' href="/dashBoard">Dashboard</a>
        <div className='userslist'>
            <h2>Liste des horaires du mois</h2>
            <div className="btncarlist">
                <Link to="/addHoraires" >Ajouter +</Link>
            </div>
            
            <table>
                <thead>
                    <tr>
                        <th>Mois</th>
                        <th>Semaine</th>
                        <th>Jour</th>
                        <th>Ouverture-Matiné</th>
                        <th>Fermeture-Matiné</th>
                        <th>Ouverture-Soirée</th>
                        <th>Fermeture-Soirée</th>
                    </tr>
                </thead>
                <tbody>
                    { horaires &&
                    horaires.map((horaire) => {
                        return (
                        <tr>
                            <td>{horaire.mois}</td>
                            <td>{horaire.semaine}</td>
                            <td>{horaire.jour}</td>
                            <td>{horaire.ouverturematine}</td>
                            <td>{horaire.fermeturematine}</td>
                            <td>{horaire.ouverturesoire}</td>
                            <td>{horaire.fermeturesoire}</td>
                            <td>
                                <Link className='btnedit' to={`/updateHoraires/${horaire.horaires_id}`}>MAJ</Link>
                                <button className='delete' onClick={(e) => handleDelete(horaire.horaires_id)}>
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
    </div>
  )
}

export default THoraires