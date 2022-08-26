import React from 'react'
import { useEffect,useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import './vehicleDetails.css'
import axios from 'axios'
 

const Bvehicle = () => {
  const location = useLocation()
  const navigate = useNavigate();
  const path = location.pathname.split("/")[2];

  const [bike,setBike]=useState({})

  useEffect(()=>{
    const getBike = async ()=>{
      const res = await axios.get("/b/" + path );
      setBike(res.data);
    
    };
    getBike(); 
  
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
            <img src={bike.bikephoto} alt="" />
            </div>
          <div className="det">
          <div className="vName">
                <h1>{bike.bikename}</h1>
            </div>
            <div className="vPrice">
            <h2>&#8377;&nbsp; {bike.price}</h2>
            </div>
            <div className="bt">
                <a href="#t"><button>Test Drive</button></a>
            </div>
          </div>
        </div>
         
        <div className="about">
          <h3>Description:</h3>
          <h2>{bike.description}</h2>
        </div>
        <div className="Specs">
         <div className="sp1"><h4>Engine</h4><span>{bike.engine}</span><hr /></div>
         <div className="sp2"><h4>Fuel Type</h4><span>{bike.fuel}</span> <hr /></div>
         <div className="sp3"><h4>Milage</h4><span>{bike.milage}</span><hr/></div>
         <div className="sp4"><h4>Max Torque</h4><span>{bike.maxtorque}</span><hr/></div>
         <div className="sp5"><h4>Max Power</h4> <span>{bike.maxpower}</span><hr/></div>
         <div className="sp6"><h4>Seating Capacity</h4><span>{bike.seat}</span><hr/></div>
         <div className="sp7"><h4> Tranmission Type</h4><span>{bike.transmission}</span></div>
          <div className="sp8"><h4>Body Type</h4> <span>{bike.body}</span></div>
        </div>
        <div className="footer" id='t'>
           <div className="tit"><h2>Test Drive</h2></div>
           <div className="in">
            <input type="text" name="" placeholder='Name' />
            <input type="text" name="" value={bike.bikename} placeholder="Bike Name" />
            <input type="text" name="" placeholder='Mobile Number' />
           </div>
           <div className="b">
              <button>Test Drive</button>
            </div>

        </div>
     </div>
    </>
  )
}

export default Bvehicle