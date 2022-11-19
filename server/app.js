const express = require('express');
const app = express();
const path = require('path');
app.use(express.json({limit: '50mb'}));
const axios = require('axios');
require('../secrets');

app.use('/dist', express.static(path.join(__dirname, '../dist')));
app.use('/static', express.static(path.join(__dirname, '../static')));
app.engine('html', require('ejs').renderFile);

app.get('/', (req, res)=> res.sendFile(path.join(__dirname, '../static/index.html')));

app.use('/api/auth', require('./api/auth'));
app.use('/api/orders', require('./api/orders'));
app.use('/api/movie', require('./api/movie'));


module.exports = app;