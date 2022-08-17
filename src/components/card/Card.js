import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Card = ({obj}) => {
  return (
    <MovieCard>
      <Link to={`/movie/${obj.id}`}>
        <MovieImg src={`https://image.tmdb.org/t/p/w500${obj.poster_path}`}/>
        <MovieTitle>{obj.title}</MovieTitle>
        <MovieDate>{obj.release_date}</MovieDate>
      </Link>
    </MovieCard>
  )
}

const MovieCard = styled.li`
  width:23%;
  padding:10px;
  border-radius:8px;
  margin-bottom: 30px;
  background-color: teal;
`;

const MovieImg = styled.img`
  width: 100%;
  object-fit: cover;
`;

const MovieTitle = styled.h2`
  color: #fff;
  font-size: 26px;
`;

const MovieDate = styled.time`
  color: #fff;
  font-size: 18px;
`;