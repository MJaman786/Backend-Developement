import 'dotenv/config.js'
import mongoose from "mongoose";
import Student from './model/UserSchema.js';
import { dummyStudents } from './dummyRecords/dummyStudents.js';

const seederFunction = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        await Student.deleteMany();

        const studentRecords = dummyStudents;
        await Student.insertMany(studentRecords)

        console.log(`Data Updated to DataBase`);
    } catch (error) {
        console.log(error);
    }
}

seederFunction();