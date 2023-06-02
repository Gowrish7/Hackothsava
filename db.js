
const { getDatabase } = require("firebase/database");
require('dotenv').config()
console.log(process.env)
const { initializeApp } = require("firebase/app");
const firebaseConfig = {
  databaseURL: process.env.DATABASEURL,
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);
module.exports = database;