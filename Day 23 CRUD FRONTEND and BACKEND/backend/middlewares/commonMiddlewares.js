import 'dotenv/config.js'
import express from 'express';
import cors from 'cors';

export const commonMiddlewares = (app) => {
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(express.static('public'));
    app.use(cors({
        methods: 'GET, POST, PUT, PATCH, DELETE',
        origin: process.env.CLIENT_URL
    }))
};