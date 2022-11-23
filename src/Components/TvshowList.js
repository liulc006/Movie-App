import React from 'react';
import TvshowCard from './TvshowCard';
import { Container, Grid } from '@mui/material';

const TvshowList = (prop) => {
    return (
        <>
            <Container>
                <Grid container direction="row" rowSpacing={6} columnSpacing={3}>
                    {prop.tvshow?.map(tvshow => {
                        return (
                            <TvshowCard key={tvshow.id} tvshow={tvshow}/>
                        )
                    })}
                </Grid>
            </Container>    
        </>
    )
};

export default TvshowList;