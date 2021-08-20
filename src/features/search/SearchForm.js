import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { updateMovies } from './searchSlice'
import { TMBD_URL, API_KEY } from '../../helpers/constants';

function SearchForm() {

    const [query, setQuery] = useState('');
    const dispatch = useDispatch();

    const searchMovies = async (e) => {
        e.preventDefault();
        if (query === '') {
            console.warn('Empty query');
            return;
        }
        console.log("submitting");
        const url = `${TMBD_URL}&api_key=${API_KEY}&query=${query}`;
        try {
            const res = await fetch(url);
            const data = await res.json();
            dispatch(updateMovies(data.results));
        }catch(err){
            console.error(err);
        }
    }

    return (
        <form className="form" onSubmit={searchMovies}>
            <label className="label" htmlFor="query">Movie Name</label>
            <input className="input" type="text" name="query" 
                placeholder="i.e. Jurassic World"
                value={query} onChange={(e) => setQuery(e.target.value)}
            />
            <button className="button" type="submit">Search</button>
        </form>
    )
}

export default SearchForm;