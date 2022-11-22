const express = require('express');
const app = express.Router();
const { User, MovieRating } = require('../db');

app.get('/', async(req,res,next)=> {
    try{
        const ratings = await MovieRating.findAll();
        res.send(ratings);
    }
    catch(err){
        next(err);
    };
});

app.post('/addRating', async(req,res,next)=>{
    try{
        const {star, comment, movieId} = req.body;
        const user = await User.findByToken(req.headers.authorization);
        const rating = await MovieRating.create({star: star, comment: comment, userId: user.id, movieId: movieId});
        res.send(rating);
    }
    catch(err){
        next(err);
    };
});

module.exports = app;