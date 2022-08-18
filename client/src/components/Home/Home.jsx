import React from 'react';
import './home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleRegister = ()=>{
        navigate("/register")
      }
       const handleLogin = ()=>{
        navigate("/login" )
      }

      const handleBikes = ()=>{
        navigate("/bikes")
      }
      const handleCars = ()=>{
        navigate("/cars")
      }
  return (
    <>
    <div className="navbar">
        <div className="navContainer">
            <span className='logo'>The Showroom</span>
            <div className="navItems">
                <button className="navButton"  onClick={handleRegister}>Register</button>
                <button className="navButton"  onClick={handleLogin}>Login</button>   
            </div>
        </div>
         </div>

         <div className="vehicle">
              <div className="bikes">
                <button className='vehBtn' onClick={handleBikes}>Explore Bikes</button>
              </div>
              <div className="cars">
                <button className='vehBtn' onClick={handleCars}>Explore Cars</button>
                </div>
         </div>
    </>
  )
}

export default Home