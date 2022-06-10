import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = '084ca305e7a4e4bb3dbbc7b67e975385'

export function getTrendingToday() {
    return axios.get(`${BASE_URL}trending/movie/day?api_key=${KEY}`);
}