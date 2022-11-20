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

const NewsCard = (prop) => {
    const { news } = prop;
    return(
        <>
        <Grid item key={news?.id} xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ Width: '400', height: '450' }} >
                <CardActionArea href={news.url}>
                <CardMedia
                    component="img"
                    obj-fit='center'
                    height="150"
                    image={news.urlToImage}
                    alt={news?.title}
                    sx={{objectFit: 'contain'}}
                />
                <CardContent key={news?.title}>
                    <Typography gutterBottom variant="h6" component="div">
                    {news?.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                    Source: {news?.source.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {stringReducer(news?.description, 30)}
                    </Typography>
                </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
        </>

    )
};

export default NewsCard;