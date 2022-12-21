import React , {useEffect} from 'react'
import axios  from "axios";
import "./admin.css";
export default function Adminpage() {

  useEffect(()=>{

    axios.get("http://localhost:2000/get/admin/profile")

  })
   
  return (
    <div className="card-admin">
        <div className="menu">
            <a className="link" href="/profile">Profile</a>
            <a className="link" href="/payment">Payment Request</a>
            <a className="link" href="/addDoc">Add Doctor</a>
            <a className="link" href="/updateDoc">Update Details of Doctor</a>
            <a className="link" href="/home">Logout</a>
        </div>
        <div className="Info">
           <h1>Welcome Admin !</h1>  
           <div className='body'>
           </div>
        </div>
    </div>
  )
}

