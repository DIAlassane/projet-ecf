import React, { useEffect, useState } from 'react'
import DashBoard from '../admin/DashBoard';
import axios from 'axios';
import { DashboardEmp } from '../employee/DashboardEmp';

export default function Main() {
    const [role, setRole] = useState("");

    axios.defaults.withCredentials = true;

    useEffect(() => {
        axios.get("http://localhost:4000/loginsess") 
        .then((response) => {
            if (response.data.loggedIn === true) {
                setRole(response.data.user[0].role);
            }
        })
        .catch((error) => {
            console.error("Erreur lors de la requête Axios :", error);
        });    }, []);

  return (
    <div>
        {role == "employer" && <DashboardEmp />}
        {role == "admin" && <DashBoard />}
    </div>
  )
}