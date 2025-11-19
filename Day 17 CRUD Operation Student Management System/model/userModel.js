const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    fullname: String,
    email: String,
    phone: String,
    course: String,
    dob: String,
    gender: String,
    address: String,
    createdAt: {
        type: String,
        default: ()=>{
           return new Date().toLocaleString('en-US',{
            weekday: 'short',
            month: 'short',
            year:'numeric',
            hour12: true,
            hour:'2-digit',
            minute:'2-digit',
            second:'2-digit'
           })
        }
    }
})

const User = mongoose.model('User', userSchema, "studentData");
module.exports = User;