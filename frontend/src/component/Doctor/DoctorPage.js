import React from 'react'
import "./doctorPage.css";
import DoctorProfile  from "./DoctorProfile";


export default function DoctorPage() {
  
  

  return (
    <div className="card-doctor">
        <div className="menu">
            <a className="link" href="/DoctorPage">Profile</a>
            <a className="link" href="/get/MyAppointment">My Appointments</a>
            <a className="link" href="/Prescription">Prescription</a>
            <a className="link" href="/">Logout</a>
        </div>
        <div className="Info">
           <h1>Welcome Doctor!</h1>  
           <div className='body'>
           <DoctorProfile></DoctorProfile>
           </div>
        </div>
    </div>
   
  )
}