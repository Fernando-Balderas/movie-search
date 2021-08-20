import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { updateMovies } from './searchSlice'

function SearchForm() {

    // states input query, movies
    const [query, setQuery] = useState('');

    const dispatch = useDispatch();

    const searchMovies = async (e) => {
        e.preventDefault();
        if (query === '') {
            console.warn('Empty query');
            return;
        }
        console.log("submitting");
        const APIKEY = "dba03568c8024d9d9480b3fc8045631a";
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&language=en-US&page=1&include_adult=false&query=${query}`;
        try {
            const res = await fetch(url);
            const data = await res.json();
            dispatch(updateMovies(data.results));
            console.log(data);
        }catch(err){
            console.error(err);
        }
    }

    return (
        <form className="form" onSubmit={searchMovies}>
            <label className="label" htmlFor="query">Movie Name</label>
            <input className="input" type="text" name="query" 
            placeholder="i.e. Jurassic World"
            value={query} onChange={(e) => setQuery(e.target.value)}></input>
            <button className="button" type="submit">Search</button>
        </form>
    )
}

export default SearchForm;