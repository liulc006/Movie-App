import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store';
import Login from './Login';
import '../../secrets';
import * as NewsApi from 'newsapi';
import axios from 'axios';
import NewsList from './NewsList';
import { Typography } from '@mui/material';

const Home = ()=> {
  const { auth } = useSelector(state => state);
  const dispatch = useDispatch();
  const [news,setNews] = useState()

  //Getting news from newsAPI
  // const newsapi = new NewsApi(NEWS_API_KEY);
  const keyword = 'movie'
  const news_API_URL = `https://newsapi.org/v2/top-headlines?language=en&category=entertainment&q=${keyword}&apiKey=`

  useEffect(()=>{
    const fetchNews = async() => {
      const response = await axios.get(`${news_API_URL}${NEWS_API_KEY}`);
      setNews(response.data)
    };
    fetchNews();
  },[])


  return (
    <div style={{marginBottom:'3rem'}}>
      <div style={{position: 'relative', textAlign:'center'}}>
        <img src='../../static/movie-background.jpeg' style={{width:'100%'}}/>
        <Typography variant="h3" style={{
          position:'absolute', left:'10%', top:'40%', fontFamily:'Roboto', maxWidth:'50%'
        }}
        >Welcome to the Movie App</Typography>
      </div>
      <NewsList news={news}/>
      
    </div>
  );
};

export default Home;
