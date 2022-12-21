import axios from 'axios'
import React,{useState} from 'react'
import "./DoctorProfile.css";
import Moment from 'react-moment';
import 'moment-timezone';

export default function DoctorProfile() {

    const[drProfile,setDrProfile]=useState([]);
    const [D_ID,setD_ID]=useState("");
    
const showProfile=()=>{
    axios.post("http://localhost:2000/get/Doctor",{D_ID})
    .then((res)=>setDrProfile(res.data))
    
    .catch(err=>console.log(err))
}
 
return (
    <div className='fill'>
      <div className='dr-form'>
      <input className="in" type="text" name ="d_id" value={D_ID} placeholder="Enter your ID" onChange={ (event)=>setD_ID(event.target.value)}/><br></br>
      <button className="bt" onClick={showProfile}>View</button>
    </div>
    {drProfile.map((value) => {
        return( 
            <div className='doctor-card'>
<div className='drinfo'>

<ul>
<label id="lb">Doctor ID :  {value.D_ID}</label>
<li>Doctor Name : {value.Name}</li>
<li>Age : {value.Age}</li>
<li>Gender : {value.Gender}</li>
<li>Specialization : {value.Specialization}</li>
<li>Experience :  {value.Experience} yrs</li>
<li>Language Known : {value.Language} </li>
<li>E-mail : {value.Email}</li>
<li>Contact No : {value.Mobile} </li>
<li>Schedule : <Moment format="lll">
         {value.Schedule}
            </Moment></li>
</ul>
</div>
<div className='photo'>
<img src={process.env.PUBLIC_URL+"assets/Images/docpro.jpeg"} alt="#noimg" ></img>

</div>
</div>)
})}
</div>
 )
        } 