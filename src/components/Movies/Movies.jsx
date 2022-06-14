import { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { searchFilms } from 'services/API';
import s from './Movies.module.css';

export default function Movies() {
  const [query, setQuery] = useState('');
  const [films, setFilms] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const filmImage = 'https://image.tmdb.org/t/p/w300';

  function handleQueryChange(e) {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (query.trim() === '') {
      return alert('Please enter film name');
    }
    
    navigate({
      pathname: location.pathname,
      search: `query=${query}`
    });
    
    searchFilms(query)
      .then(response => {
        setFilms(films => response.data.results);
      })
      .catch(error => error.message)
      .finally(() => {
        setQuery('');
      });
  };
  
  useEffect(() => {
    location.state !== null && location.state.data && setFilms(films => location.state.data)
  }, [location]);

  return (
      <>
      <div className={s.Searchbar}>
      <form className={s.SearchForm}  onSubmit={handleSubmit}>
        <button className={s.SearchFormButton}  type="submit">
          <span className={s.SearchFormButtonLabel}></span>
        </button>
      
        <input
          className={s.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          value={query}
          placeholder="Search films"
          onChange={handleQueryChange}
        />
            </form>
    </div>
      
      {films && <ul className={s.cardLinkList}>
        {films.map(film => {
          return <li
            key={film.id}
            className={s.cardLink}
          >
            <Link to={`/movies/${film.id}`} state={{
              from: {
                path: location.pathname + location.search,
              },
              data: films
            }}
              className={s.link}>
              <img
                src={`${filmImage}${film.poster_path}`}
                alt="" />
              <h3>{film.original_title}</h3>
            </Link>
          </li>
        })}
      </ul>}
    </>
  )
};