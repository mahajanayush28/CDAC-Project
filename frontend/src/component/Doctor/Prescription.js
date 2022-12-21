import React,{ useState} from 'react'
import axios from "axios";
import "./prescription.css"

import { useNavigate } from 'react-router-dom';

export default function Prescription() {

  const navigate=useNavigate();

  const [D_ID,setD_ID]= useState("");
  const [P_ID, setP_ID]= useState("");
  const [Medicine, setMedicine]= useState("");
  const [Remark, setRemark]= useState("");
  const [Advice, setAdvice]= useState("");
  
   const addPrescription =  ()=>{
    axios.post("http://localhost:2000/add/Prescription",{"D_ID":D_ID,"P_ID":P_ID,"Medicine":Medicine,"Remark":Remark,"Advice":Advice},console.log(P_ID,D_ID,Medicine,Remark,Advice))
        .then((res)=>alert(res.data.message))
        
        .catch(err=>console.log(err))
   }
  return (
    <div className='prescription'>
      <div className='pre-form'>
      <h3>Prescription</h3>
      <label>Doctor ID</label>
      <input type="text" name ="D_ID" value={D_ID} placeholder="Enter Doctor ID" onChange={ (event)=>setD_ID(event.target.value)}/><br></br>
      <label>Patient ID</label><input type="text" name ="P_ID" value={P_ID} placeholder="Enter patient ID" onChange={ (event)=>setP_ID(event.target.value)}/><br></br>
      <label>Medicine</label><input type="text" name ="Medicine" value={Medicine} placeholder="Enter Medicine" onChange={(event)=>setMedicine(event.target.value)}/><br></br>
      <label>Remark</label><input type="text" name ="Remark" value={Remark} placeholder="Enter Remark" onChange={(event)=>setRemark(event.target.value)}/><br></br>
      <label>Advice</label><input type="text" name ="Advice" value={Advice} placeholder="Enter Advice to Patient" onChange={(event)=>setAdvice(event.target.value)}/><br></br>
  
  <button className="p-bt" onClick={addPrescription}>Add Prescription</button>
  <button className="p-bt" onClick={()=>navigate('/ViewPrescription')}>View Prescription</button>
  <button className="p-bt" onClick={()=>navigate('/DoctorPage')}>Back</button>
  
  </div>
    </div>
  )
}





 

