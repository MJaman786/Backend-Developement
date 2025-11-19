const express = require('express');

const commonMiddleware = (app)=>{
    app.use(express.urlencoded({extends: true}));
    app.use(express.json());
    app.set('view engine', 'ejs');
} 

module.exports = commonMiddleware;