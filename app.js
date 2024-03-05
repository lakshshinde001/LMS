const express = require('express');
const cors = require('cors')
const cookieParser = require('cookie-parser');
require('dotenv').config();
const userRoutes = require('./Routes/routes.js');
const  app = express();

app.use(express.json);
app.use(cors({
    origin : [process.env.FRONTEND_URL],
    credentials: true
}));
app.use(express.urlencoded({
    extended: true
}))
app.use(cookieParser())

app.use('/', userRoutes);


module.exports = app;