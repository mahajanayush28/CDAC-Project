
import "./patient.css";
import PatientProfile from "./PatientProfile";
export default function Adminpage() {

   
  return (
    <div className="card-patient">
        <div className="menu">
            <a className="link" href="/patient">Profile</a>
            <a className="link" href="/paybill">Book Appointment</a>
            <a className="link" href="/status">Appointment Status</a>
            <a className="link" href="/receipt">Receipt Payment</a>

            <a className="link" href="/">Logout</a>
        </div>
        <div className="Info">
           <h1>Welcome Patient!</h1>  

           <div className='body'>
            <PatientProfile></PatientProfile>
           </div>


        </div>
    </div>
  )
}

