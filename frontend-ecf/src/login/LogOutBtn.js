import React, { useContext } from 'react';
import { AuthContext } from '../protection/AuthContext';
import { useNavigate } from 'react-router-dom';

export const LogoutBtn = () => {
    const { logout } = useContext(AuthContext); // Retirez currentUser car il n'est pas utilisé ici
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout(); // Appel de la fonction de déconnexion
        navigate('/login'); // Redirection vers la page de connexion après la déconnexion
    };

  return (
    <div>
        <button onClick={handleLogout}>Déconnexion</button>
    </div>
  )
}
