import React from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import './vehicleDetails.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useState } from 'react'

const Cvehicle = () => {
  const location = useLocation()
  const navigate = useNavigate();
  const path = location.pathname.split("/")[2];
  
  const [car,setCar]=useState({})

useEffect(()=>{
  const getCar = async ()=>{
    const res = await axios.get("/" + path );
    setCar(res.data)
  
  };
  getCar() 

},[path]);

const handleProfile = ()=>{
  navigate("/profile")
}

  return (
    <>
    <div className="navbar">
        <div className="navContainer">
            <span className='logo'>The Showroom</span>
            <div className="navItems">
                <img onClick={handleProfile} src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />  
            </div>
        </div>
         </div>
     <div className="dataContainer">
        <div className="main">
          <div className="im">
            <img src={car.carphoto} alt="" />
            </div>
          <div className="det">
          <div className="vName">
                <h1>{car.carname}</h1>
            </div>
            <div className="vPrice">
            <h2>&#8377;&nbsp; {car.price}</h2>
            </div>
            <div className="bt">
              <button>Test Drive</button>
            </div>
          </div>
        </div>
         
        <div className="about">
          <h3>Description:</h3>
          <h2>{car.description}</h2>
        </div>
        <div className="Specs">
         <div className="sp1"><h4>Engine</h4><span>{car.engine}</span><hr /></div>
         <div className="sp2"><h4>Fuel Type</h4><span>{car.fuel}</span> <hr /></div>
         <div className="sp3"><h4>Milage</h4><span>{car.milage}</span><hr/></div>
         <div className="sp4"><h4>Max Torque</h4><span>{car.maxtorque}</span><hr/></div>
         <div className="sp5"><h4>Max Power</h4> <span>{car.maxpower}</span><hr/></div>
         <div className="sp6"><h4>Seating Capacity</h4><span>{car.seat}</span><hr/></div>
         <div className="sp7"><h4> Tranmission Type</h4><span>{car.transmission}</span></div>
          <div className="sp8"><h4>Body Type</h4> <span>{car.body}</span></div>
        </div>
     </div>
    </>
  )
}

export default Cvehicle