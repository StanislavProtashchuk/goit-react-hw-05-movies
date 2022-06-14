import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { getTrendingToday } from '../../services/API'
import s from './Home.module.css'

export default function Home() {
    const location = useLocation();
    const [films, setFilms] = useState([]);
    const filmImage = 'https://image.tmdb.org/t/p/w300';
    
    useEffect(() => {
        getTrendingToday().then(response => {
            setFilms(films => response.data.results);
        })
            .catch(error => error.message);
    }, []);

    return (
        <>
            <h1>Trending today</h1>
            <ul className={s.cardLinkList}>
                {films.map(film => {
                    return <li
                        key={film.id}
                        className={s.cardLink}
                    >
                        <Link
                            to={`movies/${film.id}`}
                            state={{ from: location }}
                            className={s.cardLink}
                        >
                            <img
                                src={`${filmImage}${film.poster_path}`}
                                alt="" />
                            <h3>{film.original_title}</h3>
                            
                        </Link>
                    </li>
                })}
            </ul>
        </>
    )
}