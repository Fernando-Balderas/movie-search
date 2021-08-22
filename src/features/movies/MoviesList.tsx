import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from "../../components/MovieCard"
import IMovie from '../../interfaces/movie';
import IState from '../../interfaces/state';

export interface IMoviesListProps {}

const MoviesList: React.FC<IMoviesListProps> = () => {
    const movies = useSelector((state: IState) => state.search.movies);
    return (
        <div className="card-list">
            {movies.filter((movie: IMovie) => movie.poster_path)
                .map((movie: IMovie) => (
                    <MovieCard movie={movie} key={movie.id}/>
            ))}
        </div>
    )
}

export default MoviesList
