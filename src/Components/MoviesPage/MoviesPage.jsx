import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import SearchBar from '../SearchBar';
import { fetchSearchFilms } from '../../services/filmsAPI';
import s from './MoviesPage.module.css';
import { validate } from 'uuid';

const MoviesPage = () => {
  const [findFilms, setFindFilms] = useState([]);

  const [request, SetRequest] = useState('');

  const location = useLocation();

  useEffect(() => {
    if (request !== '') {
      fetchSearchFilms(request).then(setFindFilms);
    }
  }, [request]);

  const handleSubmit = searchQuery => {
    SetRequest(searchQuery);
  };

  console.log(request);

  console.log(findFilms);
  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      <h1 className={s.title}>Movies</h1>
    </>
  );
};
export default MoviesPage;
