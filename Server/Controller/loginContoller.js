
const con = require("../Database/db");

const Login = (req,res)=>{

const Email = req.body.Email;
const Password =req.body.Password;

con.login(Email,Password,(err,results)=>{
  if(err)
  {  
      res.send({message:"User Not Registered !"})
  }
  else{
    if(results.length > 0)
    {
      console.log(results)
      res.send(results)
    }
    else{
      res.send({message:"User Not Reistered !"})
    }
  }
  })

}
module.exports = Login;