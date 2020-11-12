import React, { useState, useEffect } from "react";
import {Card} from "../Card";
import axios from "axios";

const apiKey = "7fc8d00ab1302c6aa7da237d2810116e"; //temporary
const baseUrl = "https://api.themoviedb.org/3/search/movie";

export const CardList = () => {
    const [movieData, setMovieData] = useState(null);
    useEffect(() =>{
        axios.get(baseUrl,{
            params:{
                api_key: apiKey,
                page:1,
                query:'Star Wars' //TODO: from input
            }
        })
        .then((res) => setMovieData(res.data))
        .catch((err) => console.log(err))
    },[])
console.log(movieData);
    return (
        <Card/>
    )
}