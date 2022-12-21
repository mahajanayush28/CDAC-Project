const con = require("../Database/db");

//create prescription table & prescription Add insertion
module.exports.AddPrescription =(req,res)=>{
   const {D_ID,P_ID,Medicine,Remark,Advice}=req.body;

    con.addPrescription(D_ID,P_ID,Medicine,Remark,Advice,(err,result)=>{
       if(err)
            {  // throw err;
        if(err.code === 'ER_DUP_ENTRY' )
        {
        res.send({message:"Prescription data already stored !"});
        }
        else if(err.code === 'ER_NO_SUCH_TABLE')
        {
        con.createPrescriptionTable((err,result)=>{
        if(err)
            { throw err; 
            res.send({message:"Prescription Table Already exits !"});
        
                }
                else
            res.send({message:"Prescription Table Created Successfully !"});
            });
        }
        }
        else 
        res.send({message:"Prescription Added Successfully !"});
        })}



   //getPrescription
   module.exports.GetPrescription = (req,res)=>{

    const {P_ID}=req.body;

    con.getPrescription(P_ID,(err,data)=>{
            if(err) {console.log(err);
            }
            else
            { 
                res.send(data);
                console.log(data);
            }
        })    
    
    }  
       

        //updatePrescription
   module.exports.UpdatePrescription = (req,res)=>{

   const {P_ID,Medicine,Remark,Advice}=req.body;
   //const {P_ID}=req.body;
    

   con.updatePrescription(P_ID,Medicine,Remark,Advice,(err,data)=>{
      
      if(err) {
        //throw err;
        console.log(err);
      }
      
      else
        { 
            //res.send(data);
            res.send({message:"Prescription data updated Successfully"});
           //console.log({message:"Prescription  data updated successfully"});
        //console.log(data);
        }
    })    

}  
    
   



