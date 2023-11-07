import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './protection/AuthContext';
import './App.css';
import Cars from './employee/Cars';
import AddCar from './employee/AddCar';
import HomeClient from './client/HomeClient';
import DetailCar from './client/DetailCar';
import EditCar from './employee/EditCar';
import DashBoard from './admin/DashBoard';
import Users from './admin/Users';
import CreateUser from './admin/CreateUser';
import UpdateUser from './admin/UpdateUser';
import Services from './admin/services/Services';
import CreateService from './admin/services/CreateService';
import UpdateService from './admin/services/UpdateService';
import THoraires from './admin/horaires/THoraires';
import AddHoraires from './admin/horaires/AddHoraire';
import UpdateHoraires from './admin/horaires/UpdateHoraire';
import Contact from './client/Contact';
import Contactus from './admin/contact/Contactus';
import { LogBus } from './login/LogBus';
import { DashboardEmp } from './employee/DashboardEmp';
import { DashEmployer } from './employee/DashEmployer';
// import ProtectedRoute from './protection/Protectedroutes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <AuthContextProvider>
      <Routes>
      
        <Route path='/' element={<HomeClient />} ></Route>
        <Route path='/login' element={<LogBus />} ></Route>
        <Route path='/contact' element={<Contact />} ></Route>

        
         {/* <Route element={<ProtectedRoute />}> */}
        <Route path='/cars' element={<Cars />} ></Route>
        <Route path='/addcar' element={<AddCar />} ></Route>
        <Route path='/detailCar/:id' element={<DetailCar />} ></Route>
        <Route path='/editCar/:id' element={<EditCar />} ></Route>
        <Route path='/dashBoard' element={<DashBoard />} ></Route>
        <Route path='/users' element={<Users />} ></Route>
        <Route path='/createUser' element={<CreateUser />} ></Route>
        <Route path='/updateUser/:id' element={<UpdateUser />} ></Route>
        <Route path='/services' element={<Services />} ></Route>
        <Route path='/createService' element={<CreateService />} ></Route>
        <Route path='/updateService/:id' element={<UpdateService />} ></Route>
        <Route path='/horaires' element={<THoraires />} ></Route>
        <Route path='/addHoraires' element={<AddHoraires />} ></Route>
        <Route path='/updateHoraires/:id' element={<UpdateHoraires />} ></Route>
        <Route path='/contactus' element={<Contactus />} ></Route>
        <Route path='/dashboardemp' element={<DashboardEmp />} ></Route>
        <Route path='/dashemployer' element={<DashEmployer />} ></Route>

          {/* </Route> */}
          
      </Routes>
      </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
