import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../secrets';
import TvshowList from './TvshowList';

const TvShow = () => {
    const tvshow_URL = `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
    const [tvshow, setTvshow] = useState();
    
    useEffect(()=>{
        const fetchTvshow = async() => {
            setTvshow((await axios.get(tvshow_URL)).data.results);
        };
        fetchTvshow();
    },[])

    return (
        <>
            <h1>TV Show:</h1>
            {/* <pre>{JSON.stringify(tvshow,null,2)}</pre> */}
            <TvshowList tvshow={tvshow}/>
        </>
    )
};

export default TvShow;