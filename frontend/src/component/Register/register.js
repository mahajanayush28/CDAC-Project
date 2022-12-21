import React , { useState} from 'react'
import axios from "axios";
import "./register.css";
import {useNavigate} from "react-router-dom";


 const Register = () => {
  
  const navigate = useNavigate();

   const [Name, setName]= useState("");
   const [Email, setEmail]= useState("");
   const [Password, setPassword]= useState("");
   const [ConfirmPassword, setConfirmPassword]= useState("");
   const [Role, setRole]= useState("");
   
  

   const handleClick = ()=>{
    const user = { Name,Email,Password,ConfirmPassword,Role}
    

    if(Name && Email && Password && (Password === ConfirmPassword) && Role)
      {
        axios.post("http://localhost:2000/register",user)
        .then(res=>{
          alert(res.data.message)
          navigate("/login");
        })
        .catch(err=>console.log(err.message))
   }
   else 
      {
           alert("Invalid credentials");
      }
   
      
   }
 
  return (
  <div className="register">
  <h1>Register</h1>
  <select  name="role" valur={Role} placeholder="Enter Your Role" onChange={(e)=>{setRole(e.target.value)
    if(e.target.value === "patient"){
      navigate("/addPatient");
    } }}>
      <option>Select Your Role</option>
    <option value="patient" >patient</option>
    <option  value="doctor">doctor</option>
    </select>
 
  <input type="text" name ="name" value={Name} placeholder="Enter Your Name"  onChange={(e)=>{setName(e.target.value)}}/>
  <input type="email" name ="email" value={Email} placeholder="Enter Your Email" onChange={(e)=>{setEmail(e.target.value)}}/>
  <input type="password" name ="password" value={Password} placeholder="Create New Password" onChange={(e)=>{setPassword(e.target.value)}}/>
  <input type="password" name ="confirmPassword" value={ConfirmPassword} placeholder="Confirm Your Password" onChange={(e)=>{setConfirmPassword(e.target.value)}}/>
  {/* <input type="" name="role" valur={Role} placeholder="Enter Your Role" onChange={(e)=>{setRole(e.target.value)}}></input>*/}
  <button onClick={handleClick}>Register</button> 
  <p id="p">Already have an account ?<a href="/login">Log In</a></p>
  </div>
  
  )

}

export default Register;