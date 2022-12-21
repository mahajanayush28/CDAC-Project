import axios from 'axios';
import React,{useState} from 'react'
import './ViewPrescription.css'
import { useNavigate } from 'react-router-dom';

export default function ViewPrescription() {

  const navigate=useNavigate();
  

  const [P_ID,setP_ID]=useState("");

  const[preList,setPreList]=useState([]);

   //const P_ID=101;

    const show = () => {
   
    axios.post("http://localhost:2000/get/Prescription",{P_ID:P_ID}).then((res) => {
        setPreList(res.data);
        console.log(res);
    });
  };



  return (
    <div className='ViewPrescription'>
      <div className='form'>
      <label>Enter Patient ID</label>
      <input type="text" name ="P_ID" value={P_ID} placeholder="Enter patient By ID" onChange={ (event)=>setP_ID(event.target.value)}/><br></br>
       
        <button onClick={show}>View</button>
        <button onClick={()=>navigate('/EditPrescription')}>Edit Prescription</button>
        



    </div>

    {preList.map((value) => {
        return( <div className='info'><h1>P_ID : {value.P_ID}<br></br></h1> 
        <h1> Patient_Name : {value.name}<br></br></h1>
        <h1> Treatname_Name : {value.specialization}<br></br></h1>
        <h1> Prescription : {value.Medicine} <br></br></h1>
        <h1> Remark : {value.Remark} <br></br></h1>
        <h1> Advice : {value.Advice} <br></br></h1>
        
        </div>
        )
        

})}
</div>
 )}

