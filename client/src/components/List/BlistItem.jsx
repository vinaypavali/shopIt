import React from 'react'
import './listItem.css'

const BlistItem = ({bike}) => {
  return (
    
    <div className='itemContainer'>
        <div className="pic">
            <img src={bike.bikephoto} alt="" />
        </div>
        <div className="details">
            <div className="vehicleName">
                <h1>{bike.bikename}</h1>
            </div>
            <div className="vehiclePrice">
            <h3>&#8377;&nbsp; {bike.price}</h3>
            </div>
        </div>
     </div>
    
  )
}

export default BlistItem