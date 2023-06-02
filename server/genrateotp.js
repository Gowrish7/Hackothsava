const otpgenerator=require("otp-generator")
const generateotp=()=>{
const otp=otpgenerator.generate(6,{
    upperCaseAlphabets:true,
    specialChars:true,
});
return otp;
}
module.exports=generateotp;