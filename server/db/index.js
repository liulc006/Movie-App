const conn = require('./conn');
const User = require('./User');
const Product = require('./Product');
const Order = require('./Order');
const LineItem  = require('./LineItem');
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const Movie = require('./Movie');
const MovieRating = require('./MovieRating');

Order.belongsTo(User);
LineItem.belongsTo(Order);
Order.hasMany(LineItem);
LineItem.belongsTo(Product);

MovieRating.belongsTo(User);
User.hasMany(MovieRating);
MovieRating.belongsTo(Movie);
Movie.hasMany(MovieRating);

const getImage = (path)=> {
  return new Promise((resolve, reject)=> {
    fs.readFile(path, 'base64', (err, data)=> {
      if(err){
        reject(err);
      }
      else {
        resolve(data);
      }
    });
  });
};

const insertMovieData = async(moviesAxios) =>{
  const data = moviesAxios.data.results;
  for(let movie of data ){
    await Movie.create({
      id: movie.id,
      title: movie.title,
      original_title: movie.original_title,
      original_language: movie.original_language,
      genre_ids: movie.genre_ids,
      release_date: movie.release_date,
      poster_URL: movie.poster_path,
      overview: movie.overview,
      popularity: movie.popularity,
      vote_count: movie.vote_count,
      vote_average: movie.vote_average
    })
  }
}

const syncAndSeed = async()=> {
  await conn.sync({ force: true });
  const avatar = await getImage(path.join(__dirname, '../../prof-avatar.png'));
  const [moe, luca, larry, foo, bar, bazz, ethyl] = await Promise.all([
    User.create({ username: 'moe', password: '123', avatar }),
    User.create({ username: 'luca', password: '123' }),
    User.create({ username: 'larry', password: '123' }),
    Product.create({ name: 'foo' }),
    Product.create({ name: 'bar' }),
    Product.create({ name: 'bazz' }),
    User.create({ username: 'ethyl', password: '123' }),
  ]);

  const moviesTopRated = await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=4355caf50ba3e786e715b091d9b2bcda');
  const moviesPopular = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=4355caf50ba3e786e715b091d9b2bcda');
  await insertMovieData(moviesTopRated);
  await insertMovieData(moviesPopular);

  await Promise.all([
    MovieRating.create({userId:luca.id, movieId:'851644', star: 5, comment: 'One of the best Netflix Movie'})
  ]);

  const cart = await ethyl.getCart();
  await ethyl.addToCart({ product: bazz, quantity: 3});
  await ethyl.addToCart({ product: foo, quantity: 2});
  return {
    users: {
      moe,
      luca,
      larry
    },
    products: {
      foo,
      bar,
      bazz
    }
  };
};


module.exports = {
  syncAndSeed,
  User,
  Product,
  Movie,
  MovieRating
};
