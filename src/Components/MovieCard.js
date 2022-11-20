import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, SliderThumb } from '@mui/material';
import { Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const stringReducer = (text, word_count=30) => {
    if(!text){
        return text
    }
    const splitText = text.split(' ');
    if(splitText.length <=word_count){
        return splitText.join(' ')
    }
    const newText = splitText.slice(0,word_count);
    return newText.join(' ')+'...';
};

const MovieCard = (movieObj) => {
    const { movie } = movieObj;
    return(
        <Grid item key={movie?.id} xs={12} sm={6} md={4} lg={3}>
        <Card sx={{ maxWidth: 345, height: 650 }} >
            <CardActionArea href={`#/movies/${movie?.id}`}>
              <CardMedia
                component="img"
                obj-fit='center'
                height="400"
                image={movie?.poster_URL}
                alt={movie?.title+ ' Poster'}
                sx={{objectFit: 'contain'}}
              />
              <CardContent key={movie?.id}>
                <Typography gutterBottom variant="h5" component="div">
                  {movie?.title}
                </Typography>
                <Typography variant="body3" color="text.secondary">
                  {movie?.release_date}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {stringReducer(movie?.overview, 30)}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          </Grid>
    )
};

export default MovieCard;