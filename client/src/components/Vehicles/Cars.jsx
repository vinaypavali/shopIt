import React from 'react'
import './vehicles.css'
import CitemList from '../List/ClistItem'
import { useState,useEffect } from 'react'
import axios from 'axios'

const Cars = () => {
  const [cars,setCars]=useState([{}])
 
  useEffect(()=>{
    const fetchCars = async ()=>{
      const res = await axios.get("/allcars");
      console.log(res);
      setCars(res.data);
    }
     fetchCars()
  },[])

  return (
    <>
    <div className="search">
        <input placeholder="Search for Cars"/>
       
    </div>
    <div className="data">
    {cars.map((c)=>(
              <CitemList key={c.toString()} car={c}/>
         ))}
       
     </div>
  </>
  )
}

export default Cars