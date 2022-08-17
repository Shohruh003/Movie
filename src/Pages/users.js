import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Routes, Route, useParams } from "react-router-dom";
import styled from "styled-components";
import { Card } from "../components/card/Card";
import "./users.css";


export const Users = () => {
  return (
    <div className="box">
      <div className="header d-flex align-items-center">
        <Link className="link me-3" to="/users">Home page</Link>
        <Link className="link me-3" to="popular">Popular Movies</Link>
        <Link className="link me-3" to="rated">Top-rated Movies</Link>
        <Link className="link me-3" to="corning">Up corning Movies</Link>
        <Link className="link me-3" to="show">Tv-show</Link>
        <input className="input" type="text" placeholder="Search" />
      </div>

      <div>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/popular" element={<Popular/>}/>
          <Route path="/rated" element={<Rated/>}/>
          <Route path="/corning" element={<Corning/>}/>
          <Route path="/show" element={<Show/>}/>
        </Routes>
      </div>
    </div>
  )
}

function Home(){
  return (
    <>
      <h1 className="ms-3">Home page</h1>
    </>
  )
}

function Popular(){

  const {id} = useParams();

  const [films, setFilms] = useState([]);

  useEffect(() => {
    axios.get("https://api.themoviedb.org/3/movie/popular", {
      params: {
        api_key: "0431834c535ecb8b718ac720e46307f3",
      },
    })
    .then(function (response) {
      setFilms(response.data.results);
    })
    .catch(function (error) {
      console.log(error);
    })
    
  }, []);

  return (
    <>
      {films.length && (
        <List>
        {
          films.map((e) => (
            <Card key={e.id} obj={e}/>
          ))
        }
        </List>
      )}
    </>
  )
}

const List = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  list-style:none;
  matgin: 0;
  padding: 0;
`;

function Rated(){
  return (
    <>
      <h1 className="ms-3">Top-rated Movies</h1>
    </>
  )
}

function Corning(){
  return (
    <>
      <h1 className="ms-3">Up corning Movies</h1>
    </>
  )
}

function Show(){
  return (
    <>
      <h1 className="ms-3">Tv-show</h1>
    </>
  )
}
