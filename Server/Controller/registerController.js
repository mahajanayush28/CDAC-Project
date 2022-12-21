const con = require("../Database/db");

const Register = (req, res)=>
{    
//Insert into table

const Name = req.body.Name;
const Email = req.body.Email;
const Password =req.body.Password;
const Role =req.body.Role;
   con.signup(Name,Email,Password,Role,(err)=>
{
    if(err)
       {
           if(err.code === 'ER_DUP_ENTRY' )
          {
            res.send({message:"User alerady Registered"});      
          }
            if(err.code === 'ER_NO_SUCH_TABLE')
          {
            con.createRegisterTable((err,result)=>{
            if(err) 
               {
                res.send({message:"Table Already exits !"});
               }
                else
                res.send({message:"Doctor Table Created Successfully !"});
                });
           }
        }      
    else 
          res.send({message:"Successfully Registered! Login Now "});
          
});

}
module.exports = Register;
