import React from 'react';
import './home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const handleProfile = ()=>{
      navigate("/profile")
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
                <button className="navButton"  onClick={handleProfile}>Profile</button> 
                
            </div>
        </div>
         </div>

         <div className="vehicle">
              <div className="bikes">
                <img src="./images/bike.jpeg" alt="" />
                <button className='bikeBtn' onClick={handleBikes}>Explore Bikes</button>
              </div>
              <div className="cars">
                 <img src="./images/car.jpeg" alt="" />
                <button className='carBtn' onClick={handleCars}>Explore Cars</button>
                </div>
         </div>
    </>
  )
}

export default Home