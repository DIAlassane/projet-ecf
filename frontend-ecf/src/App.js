import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Cars from './employee/Cars';
import AddCar from './employee/AddCar';
import HomeClient from './client/HomeClient';
import DetailCar from './client/DetailCar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Cars />} ></Route>
        <Route path='/addcar' element={<AddCar />} ></Route>
        <Route path='/homeClient' element={<HomeClient />} ></Route>
        <Route path='/detailCar' element={<DetailCar />} ></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
