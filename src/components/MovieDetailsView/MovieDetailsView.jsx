import s from './MovieDetailsView.module.css'
import { lazy, Suspense } from 'react';
import { useState, useEffect } from "react";
import {Route, Routes, useParams, useLocation, useNavigate, Link } from 'react-router-dom';
import { getFilmById } from "services/API";
import { Loader } from 'components/Loader/Loader';

const Cast = lazy(() => import('../Cast/Cast' /* webpackChunkName: "cast" */));
const Reviews = lazy(() => import('../Reviews/Reviews' /* webpackChunkName: "reviews" */));

export default function MovieDetailsView() {

    const [film, setFilm] = useState();
    const { filmId } = useParams();
    const location = useLocation();
    const filmImage = 'https://image.tmdb.org/t/p/w300';

    useEffect(() => {
        getFilmById(filmId).then(response => {
            setFilm(film => response.data);            
        })
            .catch(error => error.message);
    }, [filmId]);

        const state = {
        data: location.state.data,
        from: { path: location.pathname }
    };

    return (
        <>
            {film &&
                <>
                <Link
                    to={location?.state?.from?.path ?? '/'}
                    className={s.button}
                    state={state}>
                    Go Back
                </Link>

                <div className={s.filmCard}>
                        <img src={`${filmImage}${film.poster_path}`} alt={film.original_title} />
                        <div className={s.filmInfo}>
                            <h2 className={s.title}>{film.original_title}</h2>
                            <p className={s.text}>User Score: {film.vote_average * 10}%</p>
                            <h3 className={s.subtitle}>Overview</h3>
                            <p className={s.text}>{film.overview}</p>
                            <h3 className={s.subtitle}>Genres</h3>
                            <p className={s.text}>{film.genres.map(({ id, name }) => {
                                return <span key={id}>{name} </span>
                            })}</p>
                        </div >
                    </div>

                    <div className={s.addInfo}>
                        <h3 className={s.subtitle}>Additional Information</h3>
                        <ul className={s.list}>
                            <li className={s.item}>
                            <Link
                                to={`/movies/${filmId}/cast`}
                                className={s.link}
                                state={location.state}>Cast</Link>
                            </li>
                            <li className={s.item}>
                            <Link
                                to={`/movies/${filmId}/reviews`}
                                className={s.link}
                                state={location.state}>Reviews</Link>
                            </li>
                        </ul>
                    </div>

                    <Suspense fallback={<Loader/>}>
                        <Routes>
                            <Route path='cast' element={<Cast />} />
                            <Route path='reviews' element={<Reviews />} />
                        </Routes>
                    </Suspense>
                </>
            }
        </>
    )
};