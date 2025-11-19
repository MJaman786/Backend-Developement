const mongoose = require('mongoose');
const MONGO_URL = 'mongodb://localhost:27017/Student-Management-System';

const connection = async () => {
    try {
        await mongoose.connect(MONGO_URL);
        console.log(`Database Connected Successfull`);
        console.log(`STATUS CODE: ${mongoose.connection.readyState}`);
    } catch (error) {
        console.log(`Failed to Connect Database`);
        console.log(error);
    }
}

connection();

module.exports = connection;