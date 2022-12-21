import React,{ useState} from 'react'
import "./addPateint.css"
import {useNavigate} from "react-router-dom";
import axios from 'axios';
export default function AddPatient() {

  const navigate = useNavigate();

  const [P_ID ,setP_ID] = useState("")
  const [Name ,setName] = useState("")
  const [DOB ,setDOB] = useState("")
  const [Gender ,setGender] = useState("")
  const [Blood_Group ,setBlood_Group] = useState("")
  const [Mobile ,setMobile] = useState("") 
  const [Email ,setEmail] = useState("")
  const [Address ,setAddress] = useState("")
  const [Role, setRole]= useState("patient");

  //Registration
   const [Password, setPassword]= useState("");
   const [ConfirmPassword, setConfirmPassword]= useState("");

    const handleClick = (e)=> {
      if(P_ID && Name && DOB && Gender && Mobile && Email){
      const patient = {P_ID,Name,DOB,Gender,Gender,Blood_Group,Email,Mobile,Address};
      axios.post("http://localhost:2000/add/Patient",patient)
      .then((res)=>{alert(res.data.message)});
      const user = { Name,Email,Password,Role}
      axios.post("http://localhost:2000/register",user)
      .then(()=>{          
      })
    }else{
      alert("Fill the fields to add patient !")
    }
  }
  return (
    <div className="add-patient">
     <div className="pt-form" >
        <h3>Add Patient</h3>
        <label>Patient ID</label>
        <input type="text" name="P_ID" value={P_ID} placeholder="Enter Patient ID" onChange={(e)=>{setP_ID(e.target.value)}}></input>
        <label>Name</label>
        <input type="text" name="name" value={Name} placeholder="Enter Patient Name" onChange={(e)=>{setName(e.target.value)}}></input>
        <label>DOB</label>
        <input type="date" name="dob" value={DOB} placeholder="Enter Patient DOB" onChange={(e)=>{setDOB(e.target.value)}}></input>
        <label>Gender</label>
        <span>
        <label>Male</label>
        <input className="gender" type="radio" name="gender" value="male" placeholder="Enter Patient Name"  onChange={(e)=>{setGender(e.target.value)}}></input>
        <label>Female</label>
        <input className="gender" type="radio" name="gender"  value="female"  placeholder="Enter Patient Name" onChange={(e)=>{setGender(e.target.value)}}></input>
        </span>
        <label>Mobile</label>
        <input type="tel" name="mobile" value={Mobile}  placeholder="Enter Mobile Number" onChange={(e)=>{setMobile(e.target.value)}}></input>
        <label>Blood_Group</label>
        <input type="text" name="bloodgroup" value={Blood_Group}  placeholder="Enter Bllod Group" onChange={(e)=>{setBlood_Group(e.target.value)}}></input>
        <label>Email Id</label>
        <input type="email" name="email" value={Email}  placeholder="Enter Email ID" onChange={(e)=>{setEmail(e.target.value)}}></input>
        <label>Password</label>
        <input type="password" name ="password" value={Password} placeholder="Create New Password" onChange={(e)=>{setPassword(e.target.value)}}/>
        <label>Confirm Password</label>
        <input type="password" name ="confirmPassword" value={ConfirmPassword} placeholder="Confirm Your Password" onChange={(e)=>{setConfirmPassword(e.target.value)}}/>
        <label>Address</label>
        <input type="text" name="address"  value={Address} placeholder="Enter Address" onChange={(e)=>{setAddress(e.target.value)}}></input>
        <button className="btnd" onClick={()=>{navigate("/login")}}>Back</button>
        <button className="btnd" onClick={handleClick}>Add Patient</button>
        </div>
    </div>
  )
}
