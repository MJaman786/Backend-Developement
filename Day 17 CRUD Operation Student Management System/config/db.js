const mongoose = require('mongoose');

const connection = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/StudentDatabase');
        console.log(`Connection Successfull | status CODE: ${mongoose.connection.readyState}`);
    } catch (error) {
        console.log(error);
    }
}

module.exports = connection;