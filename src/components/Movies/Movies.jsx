import { useState } from 'react';
// import { toast } from 'react-toastify';
import s from './Movies.module.css';

export default function Movies() {
  const [query, setQuery] = useState('');

  function handleQueryChange(e) {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (query.trim() === '') {
      return alert('Please enter film name');
    }
    // onSubmit(query);
    setQuery('');
  };

    return (
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
  );
};