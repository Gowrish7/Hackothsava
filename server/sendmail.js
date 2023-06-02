const expressAsyncHandler = require("express-async-Handler");
const dotenv=require("dotenv");
const otpg=require("./genrateotp.js");
const nodemailer=require("nodemailer");
let transporter= nodemailer.createTransport({
    service: 'gmail',
    secure: true,
    auth: {
        user: "secondarysumanth@gmail.com",
        pass: "7349376269",
    }
});
const sendmail=expressAsyncHandler(async(req, res)=>{
    var mailoptions={
    from:"secondarysumanth@gmail.com",
    to:req.body.email,
    subject:"OTP to login",
    text:"your OTP is: "+otpg()
    };
    await transporter.sendMail(mailoptions,function(error,info){
        if(error){
        console.log("Error", error);
        }
        else{
        console.log("Email sent successfully")
        }
        })
res.send({success:true})
    })
    module.exports={sendmail};
