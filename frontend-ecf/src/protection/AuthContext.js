import React from 'react';
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

    const login = async (inputs) => {
        const res = await axios.post('/login', inputs);
        setCurrentUser(res.data);
    }

    const logout = async () => {
      try {
          const response = await axios.get("http://localhost:4000/logout", {
              withCredentials: true,
          });
  
          // Traitez la réponse de déconnexion ici
          setCurrentUser(null);
          console.log(response.data);
  
          // Nettoyez le localStorage ici, après avoir reçu une réponse réussie du serveur
          localStorage.removeItem("user");
      } catch (error) {
          console.error("Erreur lors de la déconnexion :", error);
      }
  };
  

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser])

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>{children}</AuthContext.Provider>
  )
}
