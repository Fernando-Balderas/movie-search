import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from "../../components/MovieCard"

function MoviesList() {
    const movies = useSelector(state => state.search.movies);
    return (
        <div className="card-list">
            {movies.filter(movie => movie.poster_path).map(movie => (
                <MovieCard movie={movie} key={movie.id}/>
            ))}
        </div>
    )
}

export default MoviesList
