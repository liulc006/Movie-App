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

const TvshowCard = (prop) => {
    const { tvshow } = prop;
    const img_url = 'https://image.tmdb.org/t/p/original';

    return(
        <Grid item key={tvshow?.id} xs={12} sm={6} md={4} lg={3}>
        <Card sx={{ maxWidth: 345, height: 650 }} >
            <CardActionArea href={`#/tvshows/${tvshow?.id}`}>
              <CardMedia
                component="img"
                obj-fit='center'
                height="400"
                image={tvshow ? `${img_url}${tvshow.poster_path}`:''}
                alt={tvshow?.name+ ' Poster'}
                sx={{objectFit: 'contain'}}
              />
              <CardContent key={tvshow?.id}>
                <Typography gutterBottom variant="h5" component="div">
                  {tvshow?.name}
                </Typography>
                <Typography variant="body3" color="text.secondary">
                  {tvshow?.first_air_date}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {stringReducer(tvshow?.overview, 30)}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          </Grid>
    )
};

export default TvshowCard;