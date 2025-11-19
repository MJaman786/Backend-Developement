const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`SERVER RUNNING: http://localhost:${PORT}`);
})

// database connection
const connection = require('./config/db');
connection();

// import all common middlewares
const commonMiddleware = require('./middlewares/commonMiddlewares');
commonMiddleware(app);

// normal users no admin
const commonRouter = require('./route/commonRoute');
app.use('/', commonRouter);


