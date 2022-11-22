import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../../secrets';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';
import RatingDetail from './RatingDetail';


const MovieDetail = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState();
    
    useEffect(()=>{
        const fetchMovieDetail = async() => {
            setMovie((await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=`+API_KEY)).data);
        }
        fetchMovieDetail();
    },[]);


    return (
        <>
            <div style={{display: 'flex', flexDirection:'column'}}>
                <div style={{padding:'2rem', textAlign:'center'}}>
                    <h1>{movie?.title}</h1>
                </div>
                <div style={{display:'flex', flexDirection:'row', marginBottom: '3rem'}}>
                    <div style={{
                        marginRight: '2rem', flexGrow: '1', display:'flex', 
                        flexDirection:'column', alignItems:'center', marginLeft: '3rem'}}
                        >
                        <CardMedia
                            component="img"
                            height="400"
                            image={movie ? `https://image.tmdb.org/t/p/original${movie.poster_path}`:''}
                            alt={movie?.title+ ' Poster'}
                            sx={{objectFit: 'contain'}}
                        />
                        <div style={{display:'flex', flexDirection:'column',}}>
                            <Typography variant="body1">Website: {movie?.homepage ? movie?.homepage:'-'}</Typography>
                            <Typography variant="body1">Genre: {movie?.genres.length > 1 ?
                                                                movie?.genres.map(
                                                                    genre => genre.name
                                                                ).join(', ')
                                                                :movie?.genres[0].name
                                                                }
                            </Typography>
                            <Typography variant="body1">Original Language: {movie?.original_language}</Typography>
                            <Typography variant="body1">Original Title: {movie?.original_title}</Typography>
                            <Typography variant="body1">Status: {movie?.status}</Typography>
                            <Typography variant="body1">Release Date: {movie?.release_date}</Typography>
                            <Typography variant="body1">Runtime: {movie?.runtime}</Typography>
                        </div>
                    </div>
                    <div style={{flexGrow: '2'}}>
                        <div style={{display:'flex' }}>
                            <Typography variant="body1">Popularity: {movie?.popularity} &nbsp;</Typography>
                            <Typography variant="body1">| Vote Average: {movie?.vote_average} |</Typography>
                            <Typography variant="body1">&nbsp; Vote Count: {movie?.vote_count}</Typography>
                        </div>
                        <h3>Overview</h3>
                        <Typography variant='body1' maxWidth={'50rem'}>{movie?.overview}</Typography>
                        <div style={{display:'flex', flexDirection:'column'}}>
                            <hr />
                            <Typography variant="body1">Production Company: {movie?.production_companies.length > 1 ?
                                                                movie?.production_companies.map(
                                                                    company => company.name
                                                                ).join(', ')
                                                                :movie?.production_companies[0].name
                                                                }
                            </Typography>
                            <Typography variant="body1">Production Country: {movie?.production_countries.length > 1 ?
                                                                movie?.production_countries.map(
                                                                    country => country.name
                                                                ).join(', ')
                                                                :movie?.production_countries[0].name
                                                                }
                            </Typography>
                            <Typography variant="body1">Budget: ${movie?.budget}</Typography>
                            <Typography variant="body1">Revenue: ${movie?.revenue}</Typography>
                        </div>
                        <RatingDetail />
                    </div>
                </div>
            </div>
        </>
    )
};

export default MovieDetail;