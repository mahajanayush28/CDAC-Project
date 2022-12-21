import React,{useState} from 'react';
import  axios from 'axios';
import "./login.css";
import { useNavigate } from "react-router-dom";

import "../Register/register";


const Login = ()=>{
const navigate = useNavigate();


const [Email,setEmail]=useState("");
const [Password,setPassword]=useState("");

 
const handleSubmit =()=>{
  if(Email && Password){
      axios.post("http://localhost:2000/login",{Email:Email,Password:Password})
  .then((res)=>{
    if(res.data.length > 0)
    {
      console.log(res)
      alert("Login Successfull");
      if(res.data[0].Email === Email && res.data[0].Role === "admin")
      {
        navigate("/adminpage")
      }
      else if(res.data[0].Email === Email && res.data[0].Role === "patient")
      {

        navigate("/patient")
      }
      else if(res.data[0].Email === Email && res.data[0].Role === "doctor")
      {

        navigate("/DoctorPage")
      }
    }
      else 
    alert(res.data.message)
    })
    }
  else
  {
    alert("Invalid Input !")
  }

}
  return (

  <div className="login">
    <h1>Login</h1>
   <input type="email" name="email" value={Email} placeholder="Enter Your Email" onChange={(e)=>{setEmail(e.target.value)}}/>
    <input type="password" name="password" value={Password}  placeholder="Enter Your Password" onChange ={(e)=>{setPassword(e.target.value)}}/>
    <button onClick={handleSubmit} type="submit">Login</button>
    
     
     <p>Dont have an account yet? <a href="/register">Sign Up</a> </p>

    {/* <button onClick={()=>{navigate("/register")}} type="submit">Register</button> */}
    
    </div>
  )
 
}
 export default Login;