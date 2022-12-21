const express = require('express');
const con = require('../Database/db');

module.exports.GetPatient=(req,res)=>
{
   const P_ID = req.body.P_ID; 

  con.getPatient(P_ID,(err,results)=>
{
      if(err)
      {
        console.log("Error Occured : ",err);
      }
      else
      {
        res.json(results);
      }
})}


module.exports.CreatePatient=(req,res)=>
{
   const {P_ID,Name,DOB,Gender,Blood_Group,Email,Address,Mobile} = req.body; 

  con.createPatient(P_ID,Name,DOB,Gender,Blood_Group,Email,Address,Mobile,(err,results)=>
{
  if(err)
  {
        //throw err;
       if(err.code === 'ER_DUP_ENTRY' )
           {
           res.send({message:"Patient Already Registered !"});
           }
        else if(err.code === 'ER_NO_SUCH_TABLE')
           {
           con.createPatientTable((err,result)=>{
           if(err)
               // throw err; 
               res.send({message:"Table Already exits !"});
            else
               res.send({message:"Patient Table Created Successfully !"});
               });
           }
   }
   else 
     res.send({message:"Patient Added Successfully !"});
})}


module.exports.UpdatePatient=(req,res)=>
{
   const {P_ID,Name,DOB,Gender,Blood_Group,Email,Address,Mobile_no} = req.body; 

  con.updatePatient(P_ID,Name,DOB,Gender,Blood_Group,Email,Address,Mobile_no,(err,results)=>
{
      if(err)
      {
        console.log("Error Occured : ",err);
      }
      else
      {
        res.json(results);
      }
})}