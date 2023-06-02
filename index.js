const express=require("express");
const cors=require("cors");
const dotenv=require("dotenv");
const database = require('./db')

const { ref, child, get, set  } = require("firebase/database");
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
const accountsid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
const verifySid = process.env.VERIFYSID
const client = require("twilio")(accountsid, authToken);
webapp.post("/verifyotp", async(req, res) => {


    const phno= req.body.phonenumber
    const otpCode= req.body.otpcode
    const dbRef = ref(database);
    get(child(dbRef, `users/${phno}`)).then((snapshot) => {
    if (snapshot.exists()) {
        console.log(snapshot.val());
    } else {
        console.log("No data available");
    }
    })
    .then(()=> {
    client.verify.v2.services(verifySid)
    .verificationChecks
    .create({to: phno, code: otpCode})
    .then(verification_check => {
        console.log(verification_check.status)
        if(verification_check.status == "approved") {
            res.status(200).send({success: true,
            message: "approved"});
        } else {
            res.status(400).send({success: true,
            message: "Otp incorrect"
        });
        }
    })
.catch(err => {
res.status(600).send({success: false,
message: err.message});
})
    }).catch((error) => {
    console.error(error);
    res.status(500).send({success: false})
    });
})
webapp.post("/authenticate",async(req,res)=>{
    const seatId = req.body.seatId;
    const phno=req.body.phonenumber;
    const name=req.body.name;
    const startTime=req.body.startTime;
    client.verify.v2
    .services(verifySid)
    .verifications.create({ to: phno, channel: "sms" })
    .then(message => {
        try{const sid = message.sid
        console.log(sid);
        set(ref(database, 'users/'+phno), {
            name: name,
            phno: phno,
            seatId: seatId,
            sid: sid,
            startTime: startTime
          })
          .then(() => {
                res.status(200).send({
                success: true,
                });
          });}
    catch(err){
        res.status(500).send({success: false, message: err.message});
    }
    })
})
const port =process.env.PORT || 3100
webapp.listen(port,()=>{
    console.log("running successfully at port " + port)
})




