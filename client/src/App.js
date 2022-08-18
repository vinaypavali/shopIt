import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';
import Login from  './components/Login/Login';
import Register from  './components/Register/Register';
import Car from './components/Vehicles/Cars';
import Bike from './components/Vehicles/Bikes';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/bikes" element={<Bike/>}/>
    <Route path="/cars" element={<Car/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
