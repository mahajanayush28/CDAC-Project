import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import "./PayBill.css";
import topics from "./hms.jpg";

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

const __DEV__ = document.domain === "localhost";

function PayBill() {
  const navigate = useNavigate();
 

  const [users, setUser] = useState([]);
 
  const [P_ID, setP_ID] = useState("");
  const [D_ID, setD_ID] = useState("");
  const [Name, setName] = useState("");
  const [Specialization, setSpecialization] = useState("");
  const [Consultant_Fee, setConsultant_Fee] = useState(0);
  const [Date ,setDate] = useState(0);
  const [Time ,setTime] = useState("");

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const data = await fetch("http://localhost:2000/razorpay", {
      method: "POST",
    }).then((t) => t.json());

  
    const options = {
      key: __DEV__ ? "rzp_test_ISUkdfTgiVmIXc" : "PRODUCTION_KEY", //check localhost
      currency: data.currency,
      amount: data.amount.toString(),
      order_id: data.id,
      name: "Hospital Bill",
      description: "Thank you for your trust",
      image: topics,
      handler: function (response) {
        // console.log(array);
        console.log("helloooooooooooo");
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);


        const makeReceipt = () => {
         
           Axios.post(
            "http://localhost:2000/addAppointment",
            {
              P_ID,
              Specialization,
              Name,
              Consultant_Fee,
              Date,
              Time,
            },
            console.log(P_ID)
            )
            .then(()=>{
              Axios.post("http://localhost:2000/addbill", {
                P_ID,
                Consultant_Fee,
              })
            })
           
        };
       
        makeReceipt();
      },
      prefill: {
        email: "dhirajjadhav1112@gmail.com",
        phone_number: "8657573738",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  

  useEffect(() => {
   // console.log(getUsers());
    getUsers();
  }, []);

  function getUsers() {
    Axios.get("http://localhost:2000/getdoctor").then((resp) => {
      console.log(resp.data);
      setUser(resp.data);
    });
  }


  return (
    <div className="bill">
      <div className="table">
      <h1>Doctors List </h1>
      <table border="1" style={{ float: "left" }}>
        <tbody>
          <tr>
            <td>Docter Name</td>
            <td>Docter Id</td>
            <td>Gender</td>
            <td>Consultant Fee</td>
            <td>Specialization</td>
  </tr>
          {users.map((item, i) => (
            <tr key={i}>
              <td>{item.Name}</td>
              <td>{item.D_ID}</td>
              <td>{item.Gender}</td>
              <td>{item.Consultant_Fee}</td>
              <td>{item.Specialization}</td>
            </tr>
          ))}
        </tbody>
      </table> 
      </div>

     
        <div className="add-appoint">
     <div className="form" >
        <label>Patient ID</label>
        <input type="text" name="p_id" value={P_ID} placeholder="Enter Patient ID" onChange={(e)=>{setP_ID(e.target.value)}}></input>
        <label>Doctor ID</label>
        <input type="text" name="d_id" value={D_ID} placeholder="Enter Doctor's ID" onChange={(e)=>{setD_ID(e.target.value)}}></input>
        <label>Name</label>
        <input type="text" name="name" value={Name} placeholder="Enter Doctor's Name" onChange={(e)=>{setName(e.target.value)}}></input>
        <label>Specialization</label>
        <input type="text" name="specialization" value={Specialization}  placeholder="Enter Specialization"  onChange={(e)=>{setSpecialization(e.target.value)}}></input>
        <label>Consultant Fee</label>
        <input type="number" name="consultant_fee" value={Consultant_Fee}  placeholder="Enter Email ID" onChange={(e)=>{setConsultant_Fee(e.target.value)}}></input>
        <label>Date</label>
        <input type="date"  format="YYYY-MM-DD" placeholder="YYYY-MM-DD" onChange={(e)=>{setDate(e.target.value)}}></input>
        <label>Time</label>
        <input type="time" onChange={(e)=>{setTime(e.target.value)}}></input>
        <button className="btnd" onClick={displayRazorpay}>Book Appointment</button>
        <button className="btnd" onClick={()=>{navigate("/patient")}}>Back</button>
      </div>
    </div>
    </div>
  );
}

export default PayBill;
