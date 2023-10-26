import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import '../App.css';

function Users() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4000/users')
        .then(result => setUsers(result.data))
        .catch(err => console.log(err))
    }, [])

    const handleDelete = (id) => {
        axios.delete('http://localhost:4000/users/'+id)
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
            <h2>Liste des utilisateurs</h2>
            <div className="btncarlist">
                <Link to="/createUser" >Ajouter +</Link>
            </div>
            
            <table>
                <thead>
                    <tr>
                        <th>Rôle</th>
                        <th>Nom</th>
                        <th>Prénom</th>
                        <th>Email</th>
                        <th>Mot-de-passe</th>
                        <th>Adresse</th>
                        <th>Date de <br /> naissance</th>
                        <th>Numéro de <br />sécurité social</th>
                        <th>Genre</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    users.map((user) => {
                        return (
                        <tr>
                            <td>{user.role}</td>
                            <td>{user.name}</td>
                            <td>{user.firstname}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                            <td>{user.adresse}</td>
                            <td>{user.birth}</td>
                            <td>{user.numsecu}</td>
                            <td>{user.genre}</td>
                            <td>
                                <Link className='btnedit' to={`/updateUser/${user.user_id}`}>MAJ</Link>
                                <button className='delete' onClick={(e) => handleDelete(user.user_id)}>
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

export default Users