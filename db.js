
const { getDatabase } = require("firebase/database");
require('dotenv').config()
console.log(process.env)
// const database = getDatabase();



const { initializeApp } = require("firebase/app");

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  // ...
  // The value of `databaseURL` depends on the location of the database
  // databaseURL: "https://DATABASE_NAME.firebaseio.com",
  databaseURL: process.env.DATABASEURL,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

module.exports = database;