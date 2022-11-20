import React from 'react';
import MovieCard from './MovieCard';
import { Container, Grid } from '@mui/material';

const MovieList = (prop) => {
    return (
        <>
            <Container>
                <Grid container direction="row" rowSpacing={6} columnSpacing={3}>
                    {prop.movie.map(movie => {
                        return (
                            <MovieCard key={movie.id} movie={movie}/>
                        )
                    })}
                </Grid>
            </Container>    
        </>
    )
};

export default MovieList;