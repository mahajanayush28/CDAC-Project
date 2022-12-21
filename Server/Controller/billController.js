const con = require("../Database/db");

exports.AddBill = (req, res) => {

  
  const P_ID = req.body.P_ID;
  const Amount = req.body.Consultant_Fee;
 con.addbill(P_ID,Amount,(err, result) => {
    if (err) {
      res.send("ERR");
    } else {
      res.send(result);
    }
  });
};

exports.GetReceipt = async (req, res) => {
  
  const P_ID = req.body.P_ID;
 con.getReceiptdb(P_ID,(err, result) => {
    if (err) {
     res.send(err);
    } else {
      res.send(result);
    }
  });
};

exports.createappointment = (req, res) => {
 
  const P_ID = req.body.P_ID;
  const Specialization = req.body.Specialization;
  const Doctor_Name = req.body.Name;
  const Consultant_Fee = req.body.Consultant_Fee;
  const Date = req.body.Date;
  const Time = req.body.Time;
console.log(P_ID, Specialization, Doctor_Name, Consultant_Fee,Date,Time);
   
con.bookappoint(P_ID, Specialization, Doctor_Name, Consultant_Fee,Date,Time,(err, result) => {
    if (err) {
      throw err;
      res.send(err);
    } else {
      res.send("success");
    }
  });
};


exports.ListDoctor = (req, res) => {
 con.allDoctor((err, result) => {
    if (err) {
      res.send("ERR");
    } else {
      res.send(result);
    }
  });
};

exports.GetStatus = (req, res) => {

const P_ID = req.body.P_ID;

  con.status(P_ID,(err, result) => {
     if (err) {
       res.send("ERR");
     } else {
       res.send(result);
     }
   });
 };