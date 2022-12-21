const express = require('express') ;
const Router = express.Router();
const Register = require("../Controller/registerController");
const Login = require("../Controller/loginContoller");
const {AddAdmin,AddDoctor} = require("../Controller/adminController");
const { AddPrescription, GetPrescription, UpdatePrescription } = require('../Controller/prescriptionController');
const { GetDoctor } = require('../Controller/doctorController');
const { GetTodayMyAppointment, UpdateAppointment, CancelAppointment, GetAppointment } = require('../Controller/appointmentController');
const { CreatePatient, GetPatient, UpdatePatient } = require('../Controller/patientController');
const {  GetReceipt, AddBill, ListDoctor,createappointment, GetStatus } = require('../Controller/billController');

//Login ANd Register
Router.route("/register").post(Register);
Router.route("/login").post(Login);
Router.route("/add/Admin").post(AddAdmin);
// Router.route("/get/admin/profile").get(Profile);

//Prescription
Router.route('/add/Prescription').post(AddPrescription);
Router.route('/get/Prescription').post(GetPrescription);
Router.route('/update/Prescription').post(UpdatePrescription);

//Doctor and  Appointment 
Router.route('/get/Doctor').post(GetDoctor);
Router.route('/get/MyTodayAppointment').post(GetTodayMyAppointment);
Router.route("/add/Doctor").post(AddDoctor);

//Patient
Router.route("/add/Patient").post(CreatePatient);
Router.route("/get/Patient").post(GetPatient);
Router.route("/update/Patient").get(UpdatePatient);
Router.route("/get/Appointment").get(GetAppointment);
Router.route("/update/Appointment").get(UpdateAppointment);
Router.route("/cancel/Appointment").get(CancelAppointment);

//Bill
Router.route("/addbill").post(AddBill);
Router.route("/getReceipt").post(GetReceipt);
Router.route("/addAppointment").post(createappointment);
Router.route("/getdoctor").get(ListDoctor);
Router.route("/confirmation").post(GetStatus);
Router.route("/get/cancel").post(CancelAppointment);
module.exports = Router;
