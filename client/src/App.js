import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';
import Login from  './components/Login/Login';
import Register from  './components/Register/Register';
import Car from './components/Vehicles/Cars';
import Bike from './components/Vehicles/Bikes';
import CarDetail from './components/Details/Cvehicle'
import BikeDetail from './components/Details/Bvehicle'
import Profile from './components/Profile/Profile'
import Landing from './components/LandingPage/LandingPage'
import { useState } from "react";

function App() {
  const [user,setLoginUser]=useState({})
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route exact path="/home" element={ user && user._id ?  <Home setLoginUser={setLoginUser}/> : <Login setLoginUser={setLoginUser}/> } /> 
      <Route path="/login" element={<Login setLoginUser={setLoginUser}/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/bikes" element={<Bike/>}/>
      <Route path="/cars" element={<Car/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/bike/:bikeId" element={<BikeDetail/>}/> 
      <Route path="/car/:carId" element={<CarDetail/>}/>
     
    </Routes>
    </BrowserRouter>
  );
}

export default App;
