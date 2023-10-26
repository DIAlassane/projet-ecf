import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import Login from './login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Cars />} ></Route>
        <Route path='/addcar' element={<AddCar />} ></Route>
        <Route path='/homeClient' element={<HomeClient />} ></Route>
        <Route path='/detailCar/:id' element={<DetailCar />} ></Route>
        <Route path='/editCar/:id' element={<EditCar />} ></Route>
        <Route path='/dashBoard' element={<DashBoard />} ></Route>
        <Route path='/users' element={<Users />} ></Route>
        <Route path='/createUser' element={<CreateUser />} ></Route>
        <Route path='/updateUser/:id' element={<UpdateUser />} ></Route>
        <Route path='/login' element={<Login />} ></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
