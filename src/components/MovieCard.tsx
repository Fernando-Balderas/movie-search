import React from "react";
import { TMBD_IMG_URL } from '../helpers/constants';
import IMovie from '../interfaces/movie';

export interface IMovieCardProps {
  movie: IMovie
}

const MovieCard: React.FC<IMovieCardProps> = (props) => {
  const { movie } = props;
  const imgSrc = `${TMBD_IMG_URL}${movie.poster_path}`;
  return (
    <div className="card">
      <img className="card--image"
        src={imgSrc}
        alt={`${movie.title} poster`}
      />
      <div className="card--content">
        <h3 className="card--title">{movie.title}</h3>
        <p><small>RELEASE DATE: {movie.release_date}</small></p>
        <p><small>RATING: {movie.vote_average}</small></p>
        <p className="card--description">{movie.overview}</p>
      </div>
    </div>
  )
}

export default MovieCard;