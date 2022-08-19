import React from 'react'
import './listItem.css'

const ClistItem = ({car}) => {
  return (
    <>
    <div className='itemContainer'>
        <div className="pic">
            <img src={car.carphoto} alt="" />
        </div>
        <div className="details">
            <div className="vehicleName">
                <h1>{car.carname}</h1>
            </div>
            <div className="vehiclePrice">
            <h3>&#8377;&nbsp; {car.price}</h3>
            </div>
        </div>
     </div>
    </>
  )
}

export default ClistItem