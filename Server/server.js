// imported module 
const express = require("express");
const cors = require("cors");
const app = express();   
const bodyParser = require("body-parser");
const shortid = require("shortid");
const Razorpay = require("razorpay");
const  Router =require("./Router/router");
const path = require("path");
const PORT = process.env.PORT || 2000;
//Middlewares
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.use("/",Router);
//RazorPay
const razorpay = new Razorpay({
    key_id: "rzp_test_ISUkdfTgiVmIXc",
    key_secret: "hdVDC3LYIJ4qB0ax0LwlJUej",
  });
  
  app.get("/logo.svg", (req, res) => {
    res.sendFile(path.join(__dirname, "logo.svg"));
  });
  
  app.post("/razorpay", async (req, res) => {
    const payment_capture = 1;
    const amount = 499;
    const currency = "INR";
    const options = {
      amount: amount * 100,
      currency,
      receipt: shortid.generate(),
      payment_capture,
    };
    try {
      const response = await razorpay.orders.create(options);
      console.log(response);
      res.json({
        id: response.id,
        currency: response.currency,
        amount: response.amount,
      });
    } catch (error) {
      console.log(error);
    }
  });
//Port
app.listen(PORT,()=>{
    console.log(`Server is connected to ${PORT}`);
})