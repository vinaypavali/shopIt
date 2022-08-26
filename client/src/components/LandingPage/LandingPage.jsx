import React from 'react'
import './landingpage.css'
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {

    const navigate = useNavigate();

    const handleRegister = ()=>{
        navigate("/register")
      }
       const handleLogin = ()=>{
        navigate("/login" )
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
    
    </>
  )
}

export default LandingPage