import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../../secrets';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';
import RatingDetail from './RatingDetail';


const TvshowDetail = () => {
    const { id } = useParams();
    const [tvshow, setTvshow] = useState();
    
    useEffect(()=>{
        const fetchTvshowDetail = async() => {
            setTvshow((await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=`+API_KEY)).data);
        }
        fetchTvshowDetail();
    },[]);


    return (
        <>
            <div style={{display: 'flex', flexDirection:'column'}}>
                <div style={{padding:'2rem', textAlign:'center'}}>
                    <h1>{tvshow?.name}</h1>
                </div>
                <div style={{display:'flex', flexDirection:'row', marginBottom: '3rem'}}>
                    <div style={{
                        marginRight: '2rem', flexGrow: '1', display:'flex', 
                        flexDirection:'column', alignItems:'center', marginLeft: '3rem'}}
                        >
                        <CardMedia
                            component="img"
                            height="400"
                            image={tvshow ? `https://image.tmdb.org/t/p/original${tvshow.poster_path}`:''}
                            alt={tvshow?.name+ ' Poster'}
                            sx={{objectFit: 'contain'}}
                        />
                        <div style={{display:'flex', flexDirection:'column',}}>
                            <Typography variant="body1">Website: {tvshow?.homepage ? tvshow?.homepage:'-'}</Typography>
                            <Typography variant="body1">Genre: {tvshow?.genres.length > 1 ?
                                                                tvshow?.genres.map(
                                                                    genre => genre.name
                                                                ).join(', ')
                                                                :tvshow?.genres[0].name
                                                                }
                            </Typography>
                            <Typography variant="body1">Original Language: {tvshow?.original_language}</Typography>
                            <Typography variant="body1">Original Title: {tvshow?.original_name}</Typography>
                            <Typography variant="body1">Status: {tvshow?.status}</Typography>
                            <Typography variant="body1">First Air Date: {tvshow?.first_air_date}</Typography>
                            <Typography variant="body1">Runtime: {tvshow?.episode_run_time}</Typography>
                        </div>
                    </div>
                    <div style={{flexGrow: '2'}}>
                        <div style={{display:'flex' }}>
                            <Typography variant="body1">Popularity: {tvshow?.popularity} &nbsp;</Typography>
                            <Typography variant="body1">| Vote Average: {tvshow?.vote_average} |</Typography>
                            <Typography variant="body1">&nbsp; Vote Count: {tvshow?.vote_count}</Typography>
                        </div>
                        <Typography variant="h4">Overview</Typography>
                        <Typography variant='body1' maxWidth={'50rem'}>{tvshow?.overview}</Typography>
                        <div style={{display:'flex', flexDirection:'column'}}>
                            <hr />
                            <Typography variant="body1">Production Company: {tvshow?.production_companies.length > 1 ?
                                                                tvshow?.production_companies.map(
                                                                    company => company.name
                                                                ).join(', ')
                                                                :tvshow?.production_companies[0].name
                                                                }
                            </Typography>
                            <Typography variant="body1">Production Country: {tvshow?.production_countries.length > 1 ?
                                                                tvshow?.production_countries.map(
                                                                    country => country.name
                                                                ).join(', ')
                                                                :tvshow?.production_countries[0].name
                                                                }
                            </Typography>
                            <Typography variant="body1">Networks: {tvshow?.networks.length > 1 ?
                                                                tvshow?.production_countries.map(
                                                                    country => country.name
                                                                ).join(', ')
                                                                :tvshow?.networks[0].name
                                                                }
                            </Typography>
                        </div>
                        {/* <RatingDetail /> */}
                        {/* <pre>{JSON.stringify(tvshow,null,2)}</pre> */}
                    </div>
                </div>
            </div>
        </>
    )
};

export default TvshowDetail;