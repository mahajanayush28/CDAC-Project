import React,{useState} from 'react'
import "./addDoc.css"
import {useNavigate} from "react-router-dom";
import axios from 'axios';
export default function AddDoc() {

  const navigate = useNavigate();

  const [D_ID ,setD_Id] = useState("")
  const [Name ,setName] = useState("")
  const [Age ,setAge] = useState(0)
  const [Gender ,setGender] = useState("")
  const [Specialization ,setSpecialization] = useState("")
  const [Experience ,setExperience] = useState("")
  const [Language ,setLanguage] = useState("")
  const [Mobile ,setMobile] = useState("") 
  const [Email ,setEmail] = useState("")
  const [Date ,setDate] = useState()
  const [Time ,setTime] = useState("")
  const [Consultant_Fee ,setConsultant_Fee] = useState(0)
  
    const handleClick = (e)=> {

      if(D_ID && Name && Age && Gender && Specialization && Experience && Language && Mobile && Email){
      const doctor = {D_ID,Name,Age,Gender,Specialization,Experience,Language,Mobile,Email,Date,Time,Consultant_Fee};
      axios.post("http://localhost:2000/add/Doctor",doctor)
      .then((res)=>{alert(res.data.message)});
      // e.preventDefault("");
    }else{
      alert("Fill the fields to add doctor !")
    }
  }
    
  return (
    <div className="add-doc">
     <div className="form" >
        <h3>Add Doctor</h3>
        <label>Doctor ID</label>
        <input type="text" name="d_id" value={D_ID} placeholder="Enter Doctor's ID" onChange={(e)=>{setD_Id(e.target.value)}}></input>
        <label>Name</label>
        <input type="text" name="name" value={Name} placeholder="Enter Doctor's Name" onChange={(e)=>{setName(e.target.value)}}></input>
        <label>Age</label>
        <input type="number" name="age" value={Age} placeholder="Enter Doctor's Age" onChange={(e)=>{setAge(e.target.value)}}></input>
        <label>Gender</label>
        <span>
        <label>Male</label>
        <input className="gender" type="radio" name="gender" value="male" placeholder="Enter Doctor's Name"  onChange={(e)=>{setGender(e.target.value)}}></input>
        <label>Female</label>
        <input className="gender" type="radio" name="gender"  value="female"  placeholder="Enter Doctor's Name" onChange={(e)=>{setGender(e.target.value)}}></input>
        </span>
        <label>Specialization</label>
        <input type="text" name="specialization" value={Specialization}  placeholder="Enter Specialization"  onChange={(e)=>{setSpecialization(e.target.value)}}></input>
        <label>Experience</label>
        <input type="text" name="experience" value={Experience} placeholder="Enter experience in years" onChange={(e)=>{setExperience(e.target.value)}}></input>
        <label>Language Spoken</label>
        <input type="text" name="language" value={Language}  placeholder="Language" onChange={(e)=>{setLanguage(e.target.value)}}></input>
        <label>Mobile</label>
        <input type="tel" name="mobile" value={Mobile}  placeholder="Enter Mobile Number" onChange={(e)=>{setMobile(e.target.value)}}></input>
        <label>Email Id</label>
        <input type="email" name="email" value={Email}  placeholder="Enter Email ID" onChange={(e)=>{setEmail(e.target.value)}}></input>
        <label>Consultant Fee</label>
        <input type="number" name="consultant_fee" value={Consultant_Fee}  placeholder="Enter Email ID" onChange={(e)=>{setConsultant_Fee(e.target.value)}}></input>
        <label>Date</label>
        <input type="date"  format="YYYY-MM-DD" onChange={(e)=>{setDate(e.target.value)}}></input>
        <label>Time</label>
        <input type="time"  placeholder="Enter Schedule" onChange={(e)=>{setTime(e.target.value)}}></input>
        <button className="btnd" onClick={handleClick}>Add Doctor</button>
        <button className="btnd" onClick={()=>{navigate("/adminpage")}}>Back</button>
        </div>

    </div>
  )
}
