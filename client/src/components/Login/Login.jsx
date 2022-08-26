import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import './login.css'

const Login = ({setLoginUser}) =>{

    const navigate = useNavigate();
    
      const [user, setUser] = useState({
          email:"",
          password:""
         })
  
       const handleChange = (e)=>{
        console.log(e.target)
        const{name,value}=e.target
        setUser({
          ...user,
          [name]:value,
        })
       }

       
   const login = ()=> {
    const {email,password} = user
    if(email && password){
        axios.post("/login", user)
        .then( res => {
            alert(res.data.message);
            setLoginUser(res.data.user);
            navigate("/home");
           
            
        })
    } else {
        alert("invalid input")
    }
         
     }
  
  
    return (
      <>
      <div className='login'>
          <h1>Login</h1>
          <input type="text"  name='email' value={user.email} onChange={handleChange} placeholder='Enter Your Email' />
          <input type="password"  name='password' value={user.password} onChange={handleChange} placeholder='Enter Your Password' />
          <div className="button" onClick={login} >Login</div>
          <div>or</div>
          <div className='bn' onClick={() => navigate("/register")}>Register</div>
      </div>
      </>
      
    )
  }

export default Login