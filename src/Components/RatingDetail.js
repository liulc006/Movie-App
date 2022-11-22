import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchMovieRating } from "../store";
import {
    Rating,
    Typography,
    Button,
    Grid,
    Divider,
    Stack,
} from '@mui/material';
import dayjs from 'dayjs';
import AddMovieRating from './AddMovieRating';

const RatingDetail = () => {
    const { id } = useParams()
    const {movieRating, users, auth} = useSelector(state=>state);
    const [view, setView] = useState(false);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchMovieRating());
    }, []);
    
    const currentRatings = movieRating?.filter(rating => String(rating.movieId) === id);

    const click = () => {
        setView(!view);
      };

    return (
        <>
        <Grid container mt={2} sx={{display:'flex', flexDirection:'column', width: '80%' }}>
            {view ? <AddMovieRating view={view} setView={setView} /> : ''}
            <Grid
                item
                mb={2}
                style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                }}
            >
                <Typography variant="h4">Reviews</Typography>
                {auth.id && !view ? (
                <Button onClick={click}>Write a Review</Button>
                ) : (
                <Button href='#/login'>Write a Review</Button>
                )}
            </Grid>
            <Grid item>
                <Divider />
            </Grid>

            {currentRatings.map((rating) => {
                return (
                <Stack key={rating.id} spacing={2}>
                    <Grid container sx={{ alignItems: 'center' }}>
                    <Grid item mt={2}>
                        <Rating defaultValue={rating.star} precision={1} readOnly />
                    </Grid>
                    <Grid item ml={2} mt={2}>
                        <Typography variant="body2">
                        By{' '}
                        {users?.filter((ele) => ele.id === rating.userId)[0]?.username}{' '}
                        on {dayjs(rating.createdAt).format('MMM D, YYYY')}
                        </Typography>
                    </Grid>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1">{rating.comment}</Typography>
                    </Grid>
                    <Grid item>
                        <Divider />
                    </Grid>
                </Stack>
                );
            })}
        </Grid>
        </>
    );
};

export default RatingDetail;

