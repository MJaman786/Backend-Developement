const express = require('express');
const app = express();

app.listen(3000, ()=>{
    console.log(`SERVER RUNNING: http://localhost:3000`);
})

// importing all middlewares
const commonMiddleware = require('./middlewares/commonMiddleware');
commonMiddleware(app);

// importing database connection
const connection = require('./config/db');
const User = require('./model/userSchema');

// importing User Routes
const userRoutes = require('./route/userRoute');
userRoutes(app, User);