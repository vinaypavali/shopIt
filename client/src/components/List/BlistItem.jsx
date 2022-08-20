import React from 'react'
import './listItem.css'
import { Link } from "react-router-dom";

const BlistItem = ({bike}) => {
  return (
    
    <div className='itemContainer'>
        <div className="pic">
            <img src={bike.bikephoto} alt="" />
        </div>
        <Link to={`/bike/${bike._id}`} className="link">
        <div className="details">
            <div className="vehicleName">
                <h1>{bike.bikename}</h1>
            </div>
            <div className="vehiclePrice">
            <h3>&#8377;&nbsp; {bike.price}</h3>
            </div>
        </div>
        </Link>
     </div>
    
  )
}

export default BlistItem