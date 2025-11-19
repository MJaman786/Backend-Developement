const express = require('express')

const commonMiddleware = (app)=>{
    app.use(express.static('public/'));
    app.use(express.urlencoded({extended: true}));
    app.use(express.json());
    app.set('view engine', 'ejs');
}

module.exports = commonMiddleware;