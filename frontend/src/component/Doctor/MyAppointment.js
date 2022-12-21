

import React,{ useEffect, useState} from 'react'
import axios from "axios";
import "./MyAppointment.css"
import Moment from 'react-moment';
import 'moment-timezone';

import { useNavigate } from 'react-router-dom';



export default function MyAppointment() {

  const navigate=useNavigate();

  const[appList,setAppList]=useState([]);

   //const P_ID=101;

   const {Status}="Inprocess";

   const myTodayAppointment=()=>{
    axios.post("http://localhost:2000/get/MyTodayAppointment").then((res) => {
      setAppList(res.data);
      console.log(res);

    } );
   }

   const myPastAppointment=()=>{
    axios.post("http://localhost:2000/get/MyPastAppointment").then((res) => {
      setAppList(res.data);
      console.log(res);

    } );

   }
   
   const deleteAppoinment=()=>{

   }

   const cancelAppointment=()=>{

    document.getElementById("stat").innerHTML= "Cancelled";

   }

   const confirmAppointment=()=>{
    document.getElementById("stat").innerHTML= "Confirmed";
   }
   
   


  return (
    <div className='MyAppointment'>
      <div className='form'>
      {/* <label>Enter Date</label> */}
      {/* <input type="text" name ="Date" value={Date} placeholder="yyyy-mm-dd" onChange={ (event)=>setDate(event.target.value)}/><br></br>
        */}
      <button onClick={myTodayAppointment}>View Today's Appointment</button>
      {/* <button onClick={myPastAppointment}>View Past Appointments</button>
        */}
    </div>

    {appList.map((value) => {
        return( <div className='info'>
           <h3> <Moment format="LLLL">
         {value.date}
            </Moment></h3>

        <table className='mytable' >
         
          
         <tr>
            <th>Patient_ID</th>
            <th>Patient_Name</th>
            <th>Date</th>
            <th>Time</th>
           
              
            <th>Status</th>
            <tr>
            <th className='act'>Action
            
            </th>
            </tr>
        </tr>

        <tr>
          <td>{value.P_ID}</td>
          <td>{value.Name}</td>
         <td> <Moment format="DD/MM/YYYY">
         {value.date}
            </Moment></td>
         
          <td>{value.time}</td>
          <td id='stat'>Inprocess</td>
          <td className='btn'><button className='action' onClick={cancelAppointment}>Cancel</button></td>
          <td className='btn'><button className='action' onClick={confirmAppointment}>Confirm</button></td>
         
        </tr>
        
        </table>
        
        </div>
        )
        

})}
</div>
 )}





 

