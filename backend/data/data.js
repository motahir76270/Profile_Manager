const mongoose = require('mongoose')
const Profile = require('../modal/profileSchema')
const data = require('./profileData.json')
const dotenv = require('dotenv');
dotenv.config();
async function main() {
    try {
        const DbURL= process.env.MONGODB_URL
       await  mongoose.connect(DbURL);
        console.log("database is connected")
        await Profile.insertMany(data)
    } catch (error) {
        console.log("data base not connected")
    }
    
}
main();