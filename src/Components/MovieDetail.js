import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../../secrets';
import CardMedia from '@mui/material/CardMedia';


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
                <div style={{display:'flex', flexDirection:'row'}}>
                    <div style={{marginRight: '2rem', flexGrow: '1'}}>
                        <CardMedia
                            component="img"
                            obj-fit='center'
                            height="400"
                            image={movie ? `https://image.tmdb.org/t/p/original${movie.poster_path}`:''}
                            alt={movie?.title+ ' Poster'}
                            sx={{objectFit: 'contain'}}
                        />
                    </div>
                    <div style={{flexGrow: '3'}}>
                        <h1>Description</h1>
                    </div>
                </div>
            </div>
            <pre>{JSON.stringify(movie,null,2)}</pre>
        </>
    )
};

export default MovieDetail;