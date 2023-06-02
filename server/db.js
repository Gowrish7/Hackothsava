// // const {firebase, applicationDefault,cert}=await require('firebase-admin/app');
// // const {getFirestore,Timestamp, FieldValue, Filter}=require('firbase-admin/firestore');
// const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
// const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');

// initializeApp({
//   credential: applicationDefault()
// });

// const db = getFirestore();

// // const serviceAccount=require("./creds.json");
// // const { getStorage } = require('firebase-admin/storage');
// // const webapp=initializeApp({
// //   credential:cert(serviceAccount)
// // })
// // const db =getFirestore(webapp)
// module.exports ={db}
const { getDatabase } = require("firebase/database");

// const database = getDatabase();



const { initializeApp } = require("firebase/app");

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  // ...
  // The value of `databaseURL` depends on the location of the database
  // databaseURL: "https://DATABASE_NAME.firebaseio.com",
  databaseURL: "https://htmlbackend-ad937-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

module.exports = database;