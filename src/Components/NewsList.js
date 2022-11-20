import React from 'react';
import NewsCard from './NewsCard';
import { Container, Grid } from '@mui/material';

const NewsList = (prop) => {
    const newsShort = prop.news?.articles.slice(0,4);
    return (
        <>
            <h1>News:</h1>
            <Container>
                <Grid container direction="row" rowSpacing={6} columnSpacing={3}>
                    {newsShort?.map(news => {
                        return (
                            <NewsCard key={news.title} news={news}/>
                        )
                    })}
                </Grid>
            </Container>    
        </>
    )
};

export default NewsList;