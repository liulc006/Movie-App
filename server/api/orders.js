const express = require('express');
const app = express.Router();
const { User } = require('../db');
const { isLoggedIn } = require('./middleware');

module.exports = app;

app.post('/', isLoggedIn, async(req, res, next)=> {
  try {
    res.send(await req.user.createOrder());
  }
  catch(ex){
    next(ex);
  }
});

app.get('/cart', isLoggedIn, async(req, res, next)=> {
  try {
    res.send(await req.user.getCart());
  }
  catch(ex){
    next(ex);
  }
});

app.post('/cart', isLoggedIn, async(req, res, next)=> {
  try {
    res.send(await req.user.addToCart(req.body));
  }
  catch(ex){
    next(ex);
  }
});

app.put('/cart', isLoggedIn, async(req, res, next)=> {
  try {
    res.send(await req.user.removeFromCart(req.body));
  }
  catch(ex){
    next(ex);
  }
});
