const con = require("../Database/db");

//GetDoctor
module.exports.GetDoctor = (req,res)=>{

    const D_ID=req.body.D_ID;

    con.getDoctor(D_ID,(err,data)=>{
            if(err) {console.log(err);
            }
            else
            { 
                res.send(data);
                console.log(data);
            }
        })    
    
    }  
   