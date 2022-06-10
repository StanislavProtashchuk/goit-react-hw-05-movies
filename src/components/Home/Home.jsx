import { useState, useEffect } from 'react'
import { getTrendingToday } from '../../services/API'
import s from './Home.module.css'

export default function Home() {

    const [films, setFilms] = useState([]);
    
    useEffect(() => {
        getTrendingToday().then(response => {
            setFilms(films => response.data.results);
        })
            .catch(error => error.message);
    }, []);

    return (
        <div>
            <h1>Trending today</h1>
            <ul className={s.cardLinkList}>
                {films.map(film => {
                    return <li
                        key={film.id}
                        // className={({ isActive }) => (isActive ? s.activeCardLink : s.cardLink)}
                        className={s.cardLink}
                    >
                        <img
                            src={`https://image.tmdb.org/t/p/w300${film.poster_path}`}
                            alt="" />
                        {film.original_title}
                    </li>
                })}
                
            </ul>
        </div>
    )
}