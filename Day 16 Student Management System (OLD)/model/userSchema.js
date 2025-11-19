const mongoose = require('mongoose');

// Define the schema for a student based on the form fields.
const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true, // Ensures no duplicate emails
        trim: true,
        lowercase: true
    },
    contactNumber: {
        // Using String is safer for phone numbers to preserve formatting/leading zeros
        type: String,
        required: true,
        trim: true
    },
    course: {
        type: String,
        required: true,
        enum: ['HTML', 'CSS', 'JS', 'React', 'Node'] // Restricts input to defined courses
    },
    batchCode: {
        type: String,
        required: true,
        trim: true
    },
    // joiningDate: {
    //     type: String,
    //     default: () => {
    //         new Date().toLocaleString('en-US', {
    //             hour12: true,
    //             year: 'numeric',
    //             month: '2-digit',
    //         })
    //     },
    //     required: true
    // },
    createdAt: {
        type: String,
        default: () => {
            return new Date().toLocaleString('en-US', {
                hour12: true,
                year: 'numeric',
                month: 'short',
                weekday: 'short',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            })
        }
    },
    remarks: {
        type: String,
        default: '' // Optional, defaults to an empty string
    }
},
    { collection: 'student' }
);

// We use the capitalized convention ('Student') for the model name.
// Mongoose uses the 'collection' setting defined in the schema options.
const Student = mongoose.model('Student', userSchema);

module.exports = Student;