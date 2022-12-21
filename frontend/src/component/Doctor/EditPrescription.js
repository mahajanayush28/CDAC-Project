import React,{useState} from 'react'
import axios from 'axios';
import './EditPrescription.css'
import { useNavigate } from 'react-router-dom';


export default function EditPrescription() {

    const navigate=useNavigate();

    const [Medicine, setMedicine]= useState("");
  const [Remark, setRemark]= useState("");
  const [Advice, setAdvice]= useState("");
  const [P_ID,setP_ID]=useState("");

  const editPrescription=()=>{
  
    axios.post("http://localhost:2000/update/Prescription",{"Medicine":Medicine,"Remark":Remark,"Advice":Advice,"P_ID":P_ID},console.log(P_ID,Medicine,Remark,Advice))
    .then((res)=>alert(res.data.message))
    
    .catch(err=>console.log(err))
  
}
  
return (

    <div className='editprescription'>
    <div className='form'>
    <h3>Update Prescription</h3>
    <label>Enter Patient ID</label>
      <input type="text" name ="P_ID" value={P_ID} placeholder="Enter patient ID" onChange={ (event)=>setP_ID(event.target.value)}/><br></br>
      <label>Medicine</label><input type="text" name ="Medicine" value={Medicine} placeholder="Enter Medicine" onChange={(event)=>setMedicine(event.target.value)}/><br></br>
    <label>Remark</label><input type="text" name ="Remark" value={Remark} placeholder="Enter Remark" onChange={(event)=>setRemark(event.target.value)}/><br></br>
    <label>Advice</label><input type="text" name ="Advice" value={Advice} placeholder="Enter Advice to Patient" onChange={(event)=>setAdvice(event.target.value)}/><br></br>

    <button onClick={editPrescription}>Upate Prescription</button>
    <button onClick={()=>navigate('/DoctorPage')}>Back to Main Menu</button>
</div>
</div>
  )
}
