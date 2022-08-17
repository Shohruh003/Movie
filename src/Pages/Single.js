import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

export const Single = () => {

  const {id} = useParams();

  const [movie, setMovie] = useState({});

  useEffect(() => {
    axios.get("https://api.themoviedb.org/3/movie/" + id, {
      params: {
        api_key: "aab61be0e8c052af25d1b5a93929ba39",
      },
    })
    .then(function (response) {
      setMovie(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
    
  }, {});
  return (
    <>
      <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt="img" />
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
    </>
  )
}