import 'dotenv/config.js'
import express from 'express'
import { commonMiddlewares } from './middlewares/commonMiddlewares.js';
import { DataBaseConnection } from './db config/db.js';
import commonRoutes from './routes/commonRoutes.js'

const app = express();

const PORT = process.env.PORT || 3000

// import database connection
DataBaseConnection();

// import middlewares
commonMiddlewares(app);

// import routes
app.use('/students', commonRoutes);

app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING: http://localhost:${PORT}`);
})