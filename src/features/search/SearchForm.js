import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux'
import { updateMovies } from './searchSlice'
import axios from '../../helpers/axios';
import { useForm } from "react-hook-form";
import { TMBD_URL, API_KEY } from '../../helpers/constants';

function SearchForm() {

    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [query, setQuery] = useState('');

    useEffect(() => {
        const fetchMovies = () => {
            if (query === '') return;
            const url = `${TMBD_URL}&api_key=${API_KEY}&query=${query}`;
            axios.get(url)
                .then(function(response) {
                    dispatch(updateMovies(response.data.results));
                });
        }
        fetchMovies();
    }, [dispatch, query])
    
    const onSubmitSearch = (data) => {
        const queryTrimmed = data.query.trim();
        if (queryTrimmed === '') {
            console.warn('Empty query');
            return;
        }
        if (queryTrimmed === query) {
            console.warn('Equal query');
            return;
        }
        setQuery(queryTrimmed);
    }

    return (
        <form className="form" onSubmit={handleSubmit(onSubmitSearch)}>
            <label className="label" htmlFor="query">Movie Name</label>
            <div className="wrapper--input">
                <input className="input" type="text"
                    placeholder="i.e. Jurassic World"
                    {...register("query", { required: true })}
                />
                {errors.query && <span className="alert-error">This field is required</span>}
                </div>
            <button className="button" type="submit">Search</button>
        </form>
    )
}

export default SearchForm;