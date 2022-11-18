const express = require('express');
const app = express.Router();
const axios = require('axios');
const {Movie} = require('../db');


app.get('/top_rated', async(req, res, next)=> {
    try {
    //   const movie = await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=4355caf50ba3e786e715b091d9b2bcda&page=1-2');
    //   res.send(movie.data);
        const movie = await Movie.findAll();
        res.send(movie);
    }
    catch(ex){
      next(ex);
    }
});

module.exports = app;