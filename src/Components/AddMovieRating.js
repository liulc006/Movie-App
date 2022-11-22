import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Typography,
  Rating,
  Box,
  TextField,
  Button,
  Stack,
  FormControl,
  Grid,
} from '@mui/material';
import { submitMovieRating } from '../store';
import axios from 'axios';

const AddRating = ({ view, setView }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { auth } = useSelector((state) => state);
  const [value, setValue] = useState(0);
  const [hover, setHover] = useState(-1);
  const [comment, setComment] = useState();

  const [movie, setMovie] = useState([]);
    
  useEffect(()=>{
      const fetchMovieDetail = async() => {
          setMovie((await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=`+API_KEY)).data);
      }
      fetchMovieDetail();
  },[]);

  const handleComment = (event) => {
    setComment(event.target.value);
  };

  const submit = (ev) => {
    ev.preventDefault();
    dispatch(submitMovieRating(id, value, comment, navigate));
    setComment('');
    setValue(5);
    setView(!view);
  };

  return (
    <Stack spacing={2} mb={4}>
      <Typography variant="h4">Write a Review for:</Typography>
      <Typography variant="body1" color="primary">
        {movie.title}
      </Typography>
      {auth.id ? (
        <FormControl>
          <Grid container spacing={2} sx={{ alignItems: 'center' }}>
            <Grid item>
              <Typography variant="body1" sx={{ fontWeight: '500' }}>
                Overall Rating:
              </Typography>
            </Grid>
            <Grid item>
              <Rating
                name="simple-controlled"
                value={value}
                max={5}
                onChange={(event, newValue) => {
                  event.preventDefault();
                  if (newValue !== null) {
                    setValue(newValue);
                  }
                }}
                onChangeActive={(event, newHover) => {
                  setHover(newHover);
                }}
              />
            </Grid>
            <Grid item>
              {value !== null && <Box>{hover !== -1 ? hover : value}</Box>}
            </Grid>
          </Grid>
          <Stack spacing={2} alignItems="center">
            <TextField
              multiline
              id="comment"
              value={comment}
              onChange={handleComment}
              placeholder="Please Write Your Review Here"
              variant="outlined"
              margin="normal"
              fullWidth
              rows={5}
            />
            <Button
              variant="contained"
              onClick={submit}
              style={{ width: '33%', align: 'center' }}
            >
              Submit Your Review
            </Button>
          </Stack>
        </FormControl>
      ) : (
        <>
          <br />
          <Typography variant="body1">
            {'\n'}Please &nbsp;<Link to="/users">Login</Link>
          </Typography>
        </>
      )}
    </Stack>
  );
};

export default AddRating;