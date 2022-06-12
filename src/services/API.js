import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = '084ca305e7a4e4bb3dbbc7b67e975385'

export function getTrendingToday() {
    return axios.get(`${BASE_URL}trending/movie/day?api_key=${KEY}`);
}

export function getFilmById(filmId){
    return axios.get(`${BASE_URL}movie/${filmId}?api_key=${KEY}`);
};






// export const searchFilms = (query) => {
//     return http.get(`${BASE_URL}/search/movie?api_key=${KEY}&query=${query}&include_adult=false`);
// };

// export const getFilmCast = (filmId) => {
//     return http.get(`${BASE_URL}/movie/${filmId}/credits?api_key=${KEY}`);
// }

// export const getFilmReviews = (filmId) => {
//     return http.get(`${BASE_URL}/movie/${filmId}/reviews?api_key=${KEY}`);
// }