
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./component/common/Header"
import Footer from "./component/common/Footer";
import Register from './component/Register/register';
import Login from "./component/Login/login";
import Admin from "./component/Admin/adminpage"
import AddDoc from "./component/Admin/addDoc"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./component/Home/homepage"
import Aboutus from './component/Aboutus/Aboutus';

import Patient from "./component/Patient/patient";
import AddPatient from "./component/Patient/addPatient";
import Prescription from './component/Doctor/Prescription';
import ViewPrescription from './component/Doctor/ViewPrescription';
import MyAppointment from "./component/Doctor/MyAppointment";
import EditPrescription from "./component/Doctor/EditPrescription";
import DoctorPage from './component/Doctor/DoctorPage';
import PayBill from './component/BILL/PayBill';
import Receipt from './component/Receipts/receipt';
import AddStatus from './component/Receipts/AddStatus';
import DoctorProfile from './component/Doctor/DoctorProfile';
import PatientProfile from './component/Patient/PatientProfile';

function App() {

  return (
     <div className ="App">
        <div className="header"><Header></Header></div>
        <div className="main">
     <Router> 
      <Routes>
        <Route exact path="/" element={<Home/>}></Route> 
        <Route exact path="/aboutus" element={<Aboutus/>}></Route> 
        <Route path="/login" element={<Login></Login>} >  </Route> 
        <Route path="/register" element={<Register/>} > </Route> 
        <Route path="/adminpage" element={<Admin/>}></Route>
        <Route path="/patient" element={<Patient/>}></Route>
        <Route path="/addDoc" element={<AddDoc/>}></Route>

        {/* Doctor */}

        <Route path="/Prescription" element={<Prescription></Prescription>}></Route>
        <Route path="/ViewPrescription" element={<ViewPrescription></ViewPrescription>}></Route>
        <Route path="/editPrescription" element={<EditPrescription></EditPrescription>}></Route>
        <Route path="/get/MyAppointment" element={<MyAppointment></MyAppointment>}></Route>
        <Route path="/doctorPage" element={<DoctorPage></DoctorPage>}></Route>
          <Route path="/doctorProfile" element={<DoctorProfile/>}></Route>

        {/* Pay Bill */}
        <Route exact path="/status" element={<AddStatus/>}></Route>
        <Route exact path="/paybill" element={<PayBill/>}></Route>
        <Route exact path="/receipt" element={<Receipt/>}></Route> 
        <Route path="/addPatient" element={<AddPatient/>}></Route>
        <Route path="/get/Patient" element={<PatientProfile/>}></Route>
        </Routes>
      </Router>
      </div>
      <div className="footer"><Footer></Footer></div>
      </div>
      
  );
}

export default App;
