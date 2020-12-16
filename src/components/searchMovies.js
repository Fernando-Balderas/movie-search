import React, {useState} from "react";
import MovieCard from "./movieCard"

export default function SearchMovies() {

    // states input query, movies
    const [query, setQuery] = useState('');
    // create the state for movies, and update that state appropiate
    const [movies, setMovies] = useState([]);

    const searchMovies = async (e) => {
        e.preventDefault();
        console.log("submitting")

        const APIKEY = "dba03568c8024d9d9480b3fc8045631a";
        // const query = "Jurassic World";

        const url = `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&language=en-US&page=1&include_adult=false&query=${query}`;
        
        try {
            const res = await fetch(url);
            const data = await res.json();
            setMovies(data.results);
            console.log(data);
        }catch(err){
            console.error(err)
        }
    }

    return (
        <>
            <form className="form" onSubmit={searchMovies}>
                <label className="label" htmlFor="query">Movie Name</label>
                <input className="input" type="text" name="query" 
                placeholder="i.e. Jurassic World"
                value={query} onChange={(e) => setQuery(e.target.value)}></input>
                <button className="button" type="submit">Search</button>
            </form>
            <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <MovieCard movie={movie} key={movie.id}/>
                ))}
            </div>
        </>
    )
}