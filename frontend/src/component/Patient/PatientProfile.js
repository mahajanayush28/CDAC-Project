import axios from 'axios'
import React,{useState} from 'react'
import "./PatientProfile.css";
import 'moment-timezone';

export default function PatientProfile() {

    const[pProfile,setpProfile]=useState([]);
    const [P_ID,setP_ID]=useState("");
    
const showProfile=()=>{
    axios.post("http://localhost:2000/get/Patient",{P_ID})
    .then((res)=>setpProfile(res.data))
    .catch(err=>console.log(err))
}
 
return (
    <div className='p-fill'>
      <div className='p-form'>
      <input className="p-in" type="text" name ="p_id" value={P_ID} placeholder="Enter your ID" onChange={ (event)=>setP_ID(event.target.value)}/><br></br>
      <button className="p-bt" onClick={showProfile}>View</button>
    </div>
    {pProfile.map((value) => {
        return( 
            <div className='patient-card'>
<div className='p-info'>
<ul>
<label id="p-lb">Patient ID :  {value.P_ID}</label>
<li>Patient Name : {value.Name}</li>
<li>DOB : {value.DOB}</li>
<li>Gender : {value.Gender}</li>
<li>Blood_Group: {value.Blood_Group}</li>
<li>Email :  {value.Email}</li>
<li>Address : {value.Address} </li>
<li>Contact No : {value.Mobile} </li>

</ul>
</div>
<div className='p-photo'>
<img src={process.env.PUBLIC_URL+"assets/Images/patinet.jpg"} alt="#noimg" ></img>
</div>
</div>)
})}
</div>
 )
        } 