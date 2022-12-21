const mysql = require("mysql");

//Connecting to Database

const con = mysql.createConnection({
          host:'localhost',
          user:'root',
          password:'Ayush@14326',
          database : "HMS",
});
    con.connect((err)=>{
        if(err) throw err;
        console.log("Connected Successfully !!!!!!!");
    })

module.exports.create_database = function(callback){
con.query("CREATE DATABASE HMS",callback);
}
    

//LOGIN AND REGISTRATION

module.exports.createRegisterTable = function(callback){
    var sql ="Create table UserReg(Name VARCHAR(50),Email VARCHAR(50),Password VARCHAR(50),Role VARCHAR(50))";
    con.query(sql,callback)
}

module.exports.signup = function(Name,Email,Password,Role,callback){
    var sql = "Insert into UserReg(Name,Email,Password,Role) value (?,?,?,?)";
    con.query(sql,[Name,Email,Password,Role],callback);
}

module.exports.login = function(Email,Password,callback){
    var sql = "Select * from UserReg where Email=? and Password=?";
    con.query(sql,[Email,Password],callback);
}


//ADMIN 

module.exports.createAdminTable = function(callback){
var sql = "Create table Admin (A_ID Varchar(50) primary key,Name Varchar(50),DOB Varchar(50),Gender Varchar(50),Email Varchar(50),Mobile_No Varchar(50),Address Varchar(50))";
con.query(sql,callback);
}

module.exports.adminData = function(A_ID,Name,DOB,Gender,Email,Mobile_no,Address,callback){
    var sql = "Insert into Admin(A_ID,Name,DOB,Gender,Email,Mobile_no,Address) value ?";
    con.query(sql,[A_ID,Name,DOB,Gender,Email,Mobile_no,Address],callback);
}

module.exports.profile = function(Email,Password,callback){
    var sql ="Select * from Admin where Email=? and Password=?";
    con.query(sql,Email,Password,callback);
}

//Doctor
module.exports.createDoctorTable=function(callback){
    var sql="Create table Doctor(D_ID VARCHAR(50) PRIMARY KEY,Name VARCHAR(50),Age INT,Gender VARCHAR(50),Specialization VARCHAR(50),Experience VARCHAR(50),Language VARCHAR(50),Email VARCHAR(50),Mobile VARCHAR(50),Date date,Time time,Consultant_Fee INT)"
    con.query(sql,callback);
}

module.exports.doctorData =function(D_ID,Name,Age,Gender,Specialization,Experience,Language,Email,Mobile,Consultant_Fee,Date,Time,callback){
    var sql = "Insert into Doctor(D_ID,Name,Age,Gender,Specialization,Experience,Language,Email,Mobile,Consultant_Fee,Date,Time) values(?,?,?,?,?,?,?,?,?,?,?,?)";
        con.query(sql,[D_ID,Name,Age,Gender,Specialization,Experience,Language,Email,Mobile,Consultant_Fee,Date,Time],callback);

}
module.exports.getDoctor=function(D_ID,callback){
    var sql="select * from Doctor where D_ID = ?";
    con.query(sql,D_ID,callback);
}
//Prescription

module.exports.createPrescriptionTable=function(callback){
    var sql="create table Prescription(D_ID varchar(50),P_ID varchar(50) ,Medicine varchar(50),Remark varchar(50),Advice varchar(50))";
    con.query(sql,callback);
}

module.exports.addPrescription=function(D_ID,P_ID,Medicine,Remark,Advice,callback){
    var sql = "Insert into Prescription(D_ID,P_ID,Medicine,Remark,Advice) values(?,?,?,?,?)";
    con.query(sql,[D_ID,P_ID,Medicine,Remark,Advice],callback);
}

module.exports.getPrescription=function(P_ID,callback){
    var sql="select pre.P_ID,p.name,Medicine,Remark,Advice from Prescription pre inner join Patient p on p.P_ID=pre.P_ID where pre.P_ID=?";
   
    con.query(sql,[P_ID],callback);
}

module.exports.updatePrescription=function(P_ID,Medicine,Remark,Advice,callback){

    var sql="update Prescription set Medicine=?,Remark=?,Advice=? where P_ID=?";

    con.query(sql,[Medicine,Remark,Advice,P_ID],callback);

}

//Appointment

module.exports.getTodayMyAppointment=function(callback){
  // let sql="select a.P_ID,p.Name,a.Date,a.Time,b.Status from Patient p inner join Appointment a on p.P_ID=a.P_ID inner join Bill b on b.P_ID=a.P_ID where a.date=curdate() and b.Status='Confirmed'";
var sql="select a.P_ID,p.Name,a.date,a.time from patient p inner join appointment a on p.P_ID=a.P_ID where a.date=curdate()";
    con.query(sql,callback);
}

module.exports.createAppointmentTable = function(callback)
{
    var sql ="create table Appointment(P_ID varchar(50),Doctor_Name varchar(50),Date date,Time time,Specialization varchar(50),Consultant_Fee int)";
    con.query(sql,callback)
}


module.exports.getAppointment =function(P_ID,callback)
   {
     var sql = "select * from Appointment where P_ID = ? ";
      con.query(sql,P_ID,callback);
   }


module.exports.bookAppointment=function(P_ID,Doctor_Name,Date,Time,Specialization,Consultant_Fee,callback)
{
    var sql ="insert into Appointment(P_ID,Doctor_Name,Date,Time,Specialization,Consultant_Fee) VALUES ( ?,?,?,?,?,? )";
    con.query(sql,[P_ID,Doctor_Name,Date,Time,Specialization,Consultant_Fee],callback);
}


module.exports.updateAppointment =function(P_ID,Doctor_Name,Date,Time,Specialization,Consultant_Fee,callback)
{
    var sql ="update Appointment set P_ID=? ,Doctor_Name=?,Date=?,Time=?,Specialization=?,Consultant_Fee=? where P_ID=?";
    con.query(sql,[P_ID,Doctor_Name,Date,Time,Specialization,Consultant_Fee],callback);
}

module.exports.cancelAppointment =function(P_ID,callback)
{
    var sql ="delete from appointment where P_id= where P_ID=?";
    con.query(sql,P_ID,callback);
}



//Patient

module.exports.createPatientTable = function(callback)
{
    var sql ="create table Patient(P_ID varchar(50) primary key,Name varchar(50),DOB varchar(50),Gender varchar(50),Blood_Group varchar(50),Email varchar(50),Address varchar(50),Mobile varchar(20))";
    con.query(sql,callback)
}

module.exports.getPatient =function(P_ID,callback)
   {
     var sql = "select * from Patient where P_ID =?";
      con.query(sql,P_ID,callback);
   }

//Book Apppointment

module.exports.createPatient =function(P_ID,Name,DOB,Gender,Blood_Group,Email,Address,Mobile,callback)
{
    var sql ="insert into Patient(P_ID,Name,DOB,Gender,Blood_Group,Email,Address,Mobile) VALUES ( ?,?,?,?,?,?,?,? )";
    con.query(sql,[P_ID,Name,DOB,Gender,Blood_Group,Email,Address,Mobile],callback);
}


module.exports.updatePatient =function(P_ID,Name,DOB,Gender,Blood_Group,Email,Address,Mobile,callback)
{
    var sql ="update Patient set Name=?,DOB=?,Gender=?,Blood_Group=?,Email=?,Address=?,Mobile=? where P_ID=?";
    con.query(sql,[P_ID,Name,DOB,Gender,Blood_Group,Email,Address,Mobile],callback);
}

//Bill


module.exports.addbill=function(P_ID,Amount,callback)
{
    var sql ="insert into Bill(P_ID,Date,Time,Amount,Status,Payment)values(?,curdate(),curtime(),?,'Confirmed','Paid')";
    con.query(sql,[P_ID,Amount],callback);
}

//
module.exports.updatebill=function(P_ID,callback)
{
var sql = "update bill set Date=curdate(),Time=curtime() where P_ID=?";
con.query(sql, P_ID,callback);
}

module.exports.getReceiptdb=function(P_ID,callback)
{
var sql ="select p.Name,p.Mobile,p.Gender,p.P_ID,p.Address,b.BillNo,a.Doctor_Name,a.Consultant_Fee from Patient p inner join Bill b on b.P_ID=p.P_ID inner join Appointment a on a.P_ID=b.P_ID where b.P_ID=?";
con.query(sql,P_ID,callback);
} 

module.exports.bookappoint=function(P_ID, Specialization, Doctor_Name, Consultant_Fee,Date,Time,callback)
{
    console.log(P_ID);
var sql ="insert into Appointment(P_ID,Specialization,Doctor_Name,Consultant_Fee,Date,Time)values(?,?,?,?,?,?)";
con.query(sql,[P_ID, Specialization, Doctor_Name, Consultant_Fee,Date,Time],callback);
} 

module.exports.allDoctor=function(callback)
{
    var sql = "select * from Doctor";
    con.query(sql,callback);
}
module.exports.status=function(P_ID,callback)
{
var sql = "select a.P_ID,Doctor_Name,Specialization,Consultant_Fee,Status,Payment from Appointment a inner join Bill b on b.P_ID=a.P_ID where b.P_ID=? and b.Status='Confirmed'";

con.query(sql,P_ID,callback);
} 

module.exports.appcancel = function(P_ID,callback){
    var sql = "update table Bill set Status='Cancelled',Payment='Refund' where P_ID=?";
    con.query(sql,P_ID,callback);
}