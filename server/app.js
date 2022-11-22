const express = require('express');
const axios = require('axios');
require('../secrets');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use('/dist', express.static(path.join(__dirname, '../dist')));
app.use('/static', express.static(path.join(__dirname, '../static')));
app.engine('html', require('ejs').renderFile);

app.get('/', (req, res)=> res.sendFile(path.join(__dirname, '../static/index.html')));

app.use('/api/auth', require('./api/auth'));
app.use('/api/orders', require('./api/orders'));
app.use('/api/movie', require('./api/movie'));
app.use('/api/movie_ratings', require('./api/movieRatings'));
app.use('/api/users', require('./api/user'));


module.exports = app;