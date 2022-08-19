import React from 'react'
import './vehicles.css'
import ItemList from '../List/ClistItem'

const Cars = () => {

 

  return (
    <>
    <div className="search">
        <input placeholder="Search for Cars"/>
        <ItemList />
    </div>
  </>
  )
}

export default Cars