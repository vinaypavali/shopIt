import React from 'react'
import './vehicles.css'
import BitemList from '../List/BlistItem'
import { useState,useEffect } from 'react'
import axios from 'axios'

const Bikes = () => { 

  const [bikes,setBikes]=useState([])

  useEffect(()=>{
    const fetchBikes = async ()=>{
      const res = await axios.get("/allbikes")
      console.log(res)
      setBikes(res.data)
    }
     fetchBikes()
  },[])

  return (
    <>
      <div className="search">
         <input placeholder="Search for Bikes"/>
     </div>
     {bikes?.length > 0 ? (
        <div className="data">
          {bikes.map((b) => (<BitemList key={b.toString()} bike={b} /> ))}
        </div>
      ) : ( 
        <div className="empty">
          <h2>No bikes found</h2>
        </div>
      )}
     
    </>
  )
}

export default Bikes