const TMBD_URL = 'https://api.themoviedb.org/3/search/movie?language=en-US&page=1&include_adult=false';
const TMBD_IMG_URL = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/';
const API_KEY = process.env.REACT_APP_API_KEY || '';

export {
    TMBD_URL,
    TMBD_IMG_URL,
    API_KEY,
}