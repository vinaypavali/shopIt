import React from 'react'
import './profile.css'
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
 
  const handleLogout = ()=>{
    navigate("/")
  }

  return (
    <>
      <div className="navbar">
        <div className="navContainer">
            <span className='logo'>The Showroom</span>
            <div className="navItems">
                <button className="navButton"  onClick={handleLogout}>Logout</button> 
            </div>
        </div>
         </div>
 
     
     <div className="profileBox">
            <div className="form-icon"><i className="fa-solid fa-user"></i></div>
            <div className="data">
              <h4>Name : Vinay Kumar</h4>
              <h4>Email : vinaypavali@gmail.com</h4>
              <h4>Mobile : 7899092884</h4>
            </div>

     </div>

    </>
  )
}

export default Profile