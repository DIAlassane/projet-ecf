import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Contactus() {
    const [contact, setContact] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4000/contactus')
        .then(result => setContact(result.data))
        .catch(err => console.log(err))
    }, [])

    const handleDelete = (id) => {
        axios.delete('http://localhost:4000/contactus/'+id)
        .then(res => {
            console.log(res)
            window.location.reload()
        })
        .catch(errr => console.log(errr))
    }


  return (
    <div className='containeruser'>
        <a className='btndash' href="/dashBoard">Dashboard</a>
        <div className='userslist'>
            <h2>Liste des demandes de contact</h2>
            <div className="btncarlist">
        </div>
            <table>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Prénom</th>
                        <th>Email</th>
                        <th>Numéro de téléphone</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    contact.map((demande) => {
                        return (
                        <tr>
                            <td>{demande.nom}</td>
                            <td>{demande.prenom}</td>
                            <td>{demande.email}</td>
                            <td>{demande.numero}</td>
                            <td>
                                <button className='delete' onClick={(e) => handleDelete(demande.contact_id)}>
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

export default Contactus