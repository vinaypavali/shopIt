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

 

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Landing/>}/>
      <Route exact path="/home" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
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
