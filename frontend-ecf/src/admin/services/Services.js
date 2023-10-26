import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import '../../style/Services.css'

function Services() {
    const [services, setServices] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4000/services')
        .then(result => setServices(result.data))
        .catch(err => console.log(err))
    }, [])

    const handleDelete = (id) => {
        axios.delete('http://localhost:4000/services/'+id)
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
            <h2>Liste des Services</h2>
            <div className="btncarlist">
                <Link to="/createService" >Ajouter +</Link>
            </div>
                {
                services.map((service) => {
                    return (
                    <div className='cardserviceadmin'>
                        <div className="servflex">
                            <div className="imgservice">
                                <img src={service.img} alt="" />
                                <div className="basdesc">
                                    <h2>{service.title}</h2>
                                    <p>{service.prix} $</p>
                                </div>
                            </div>
                            <div className="descservadmin">
                                <p>{service.decriptioncard}</p>
                                <h3>{service.question}</h3>
                                <p>{service.reponse}</p>
                                <h3>{service.question2}</h3>
                                <p>{service.reponse2}</p>
                                <h3>{service.question3}</h3>
                                <p>{service.reponse3}</p>
                            </div>
                        </div>
                        
                        <div>
                            <Link className='btnedit' to={`/updateService/${service.service_id}`}>MAJ</Link>
                            <button className='delete' onClick={(e) => handleDelete(service.service_id)}>
                                Supprimer
                            </button>
                        </div>
                    </div>)
                })
                }
            </div>
        </div>
    </div>
  )
}

export default Services