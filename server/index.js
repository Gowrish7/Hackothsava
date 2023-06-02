const express=require("express");
const cors=require("cors");
const {db}=require("./db.js");
const expressAsyncHandler = require("express-async-Handler");
const dotenv=require("dotenv");
const otpg=require("./genrateotp.js");
const nodemailer=require("nodemailer");
const { sendmail } = require("./sendmail.js");
// const transporter = require("transporter");
const webapp=express();
webapp.use(express.json());
webapp.use(cors());
dotenv.config();
webapp.get('/', async(req, res) => {
    res.send({
        status: 200,
        message: "Successful"
    })
})
// webapp.post("/ref",async(req, res)=>{
//     const email=req.body.email;
//     console.log(email);
//     const pass=req.body.password;
//     const otp=otpg();
//     res.send({msg:"the otp is "+otp})
// })
webapp.post("/ref", sendmail)
webapp.listen(3000,()=>{
    console.log("running successfully")
})