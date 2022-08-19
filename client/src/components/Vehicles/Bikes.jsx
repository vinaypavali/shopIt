import React from 'react'
import './vehicles.css'
import ItemList from '../List/BlistItem'

const Bikes = () => {
  return (
    <>
      <div className="search">
         <input placeholder="Search for Bikes"/>
         <ItemList />

      </div>
    </>
  )
}

export default Bikes