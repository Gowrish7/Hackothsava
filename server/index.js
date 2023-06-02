const express=require("express");
const cors=require("cors");
const {db}=require("./db.js");
const webapp=express();
webapp.use(express.json());
webapp.use(cors());
webapp.get('/ref', async(req, res) => {
    res.send({
        status: 200,
        message: "Successful"
    })
})
webapp.post("/ref",async(req, res)=>{
    const data=req.body;
    console.log(data);
    res.send({msg:"success"})
})
webapp.listen(3000,()=>{
    console.log("running successfully")
})