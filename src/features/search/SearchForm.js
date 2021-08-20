import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { updateMovies } from './searchSlice'
import { TMBD_URL, API_KEY } from '../../helpers/constants';
import axios from '../../helpers/axios';

function SearchForm() {

    const [query, setQuery] = useState('');
    const dispatch = useDispatch();

    const searchMovies = (e) => {
        e.preventDefault();
        if (query === '') {
            console.warn('Empty query');
            return;
        }
        const url = `${TMBD_URL}&api_key=${API_KEY}&query=${query}`;
        axios.get(url)
            .then(function(response) {
                dispatch(updateMovies(response.data.results));
            });
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