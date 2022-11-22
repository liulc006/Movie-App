const express = require('express');
const app = express.Router();
const {User} = require('../db');


app.get('/', async(req, res, next)=> {
    try {
        const users = await User.findAll();
        res.send(users);
    }
    catch(ex){
      next(ex);
    }
});

module.exports = app;