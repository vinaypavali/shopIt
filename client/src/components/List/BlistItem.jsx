import React from 'react'
import './listItem.css'

const BlistItem = () => {
  return (
    <>
    <div className='itemContainer'>
        <div className="pic">
            <img src="" alt="" />
        </div>
        <div className="details">
            <div className="vehicleName">
                <h1>Bike Title</h1>
            </div>
            <div className="vehiclePrice">
            <h3>&#8377;&nbsp; Bike Price</h3>
            </div>
        </div>
     </div>
    </>
  )
}

export default BlistItem