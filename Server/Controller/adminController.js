
const con = require("../Database/db");
//Create Doctor Table

        module.exports.AddAdmin =(req,res)=>{
        const{A_id,Name,DOB,Gender,Email,Mobile_no,Address} = req.body
        con.adminData(A_id,Name,DOB,Gender,Email,Mobile_no,Address,(err)=>{
                if(err) throw err;
                else 
                console.log("Inserted Data successfully");
            })}
        
//Insert Doctor Data
        module.exports.AddDoctor =(req,res)=>{
        const {D_ID,Name,Age,Gender,Specialization,Experience,Language,Email,Mobile,Consultant_Fee,Date,Time}=req.body;
        con.doctorData(D_ID,Name,Age,Gender,Specialization,Experience,Language,Email,Mobile,Consultant_Fee,Date,Time,(err,result)=>{
           if(err)
           { 
            // throw err;
                if(err.code === 'ER_DUP_ENTRY' )
                    {
                    res.send({message:"Doctor Already Registered !"});
                    }
                else if(err.code === 'ER_NO_SUCH_TABLE')
                    {
                    con.createDoctorTable((err,result)=>{
                    if(err)
                        // throw err; 
                        res.send({message:"Table Already exits !"});
                     else
                        res.send({message:"Doctor Table Created Successfully !"});
                        });
                    }
             }
            else 
              res.send({message:"Doctor Added Successfully !"});
        })}
    

 
        //Updaet Doctor Details


        module.exports.UpdateDoc = (req,res)=>{

            const D_ID = req.body.D_ID;

            con.updateDoc(D_ID,(err,result)=>{
                if(err)
                {
                    throw err;
                }
                else
                 {
                    console.log(result);
                }
            })

        }
    

    //Payment Request
    //Records
    //Logouts