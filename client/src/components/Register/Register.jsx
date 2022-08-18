import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './register.css'

const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name:"",
    email:"",
    phone:"",
    password:"",
    reEnterPassword:""  

   })
   
 const handleChange = (e)=>{
  console.log(e.target)
  const{name,value}=e.target
  setUser({
    ...user,
    [name]:value,
  })
 }


  return (
    <div className='register'>
      {console.log("User",user)}
    <h1>Register</h1>
    <input type="text" name='name' value={user.name} onChange={handleChange} placeholder='Enter Your Name' />
    <input type="text"  name='email' value={user.email} onChange={handleChange} placeholder='Enter Your Email' />
    <input type="text"  name='phone' value={user.phone} onChange={handleChange} placeholder='Enter Your Phone' />
    <input type="password"  name='password' value={user.password} onChange={handleChange} placeholder='Enter Your Password' />
    <input type="password"  name='reEnterPassword' value={user.reEnterPassword} onChange={handleChange} placeholder='Re-Enter Your Password' />
    <div className="button" >Register</div>
    <div>or</div>
    <div className='bn' onClick={() => navigate("/login")}>Login</div>
</div>
  )
}

export default Register