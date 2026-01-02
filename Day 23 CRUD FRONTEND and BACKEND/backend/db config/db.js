import mongoose from "mongoose";

export const DataBaseConnection = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`DATABASE CONNECTION SUCCESSFUL satus: ${mongoose.connection.readyState}`);
    } catch (error) {
        console.log(`Failed to Connect DataBase.`);
        console.log(error);
    }
}