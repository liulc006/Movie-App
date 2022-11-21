const express = require('express');
const app = express.Router();
const { MovieRating } = require('../db');

app.get('/', async(req,res,next)=> {
    try{
        const ratings = await MovieRating.findAll();
        res.send(ratings);
    }
    catch(err){
        next(err);
    };
});

module.exports = app;