import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
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
            // enum: ['HTML', 'CSS', 'JS', 'React', 'Node.js', 'Next.js', 'FullStack']      // Restricts input to defined courses
        },
        batchCode: {
            type: String,
            required: true,
            trim: true
        },
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
)

const Student = mongoose.model('Student', userSchema);
export default Student;