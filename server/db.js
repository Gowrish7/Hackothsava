 async function call(){
const {firebase, applicationDefault,cert}=await require('firebase-admin/app');
const {getFirestore,Timestamp, FieldValue, Filter}=require('firbase-admin/firestore');
const serviceAccount=require("./creds.json");
const { getStorage } = require('firebase-admin/storage');
const webapp=initializeApp({
  credential:cert(serviceAccount)
})
const db =getFirestore()
module.exports ={db}
 }