import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../protection/AuthContext';
import { useNavigate } from 'react-router-dom';

export const DashboardEmp = () => {
    const { currentUser } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        console.log(currentUser)
        if (currentUser) {
            if (currentUser.role === 'admin') {
                navigate('/dashBoard');
            } else if (currentUser.role === 'employer') {
                navigate('/cars')
            }
        } else {
            // Gérer le cas où currentUser est null (peut-être rediriger vers la page de connexion?)
            navigate('/login')
        }
    }, [currentUser, navigate])

  return (
    <div>DashboardEmp</div>
  )
}
