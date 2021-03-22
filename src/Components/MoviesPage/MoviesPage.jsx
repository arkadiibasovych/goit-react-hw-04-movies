import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import SearchBar from '../SearchBar';
import { fetchSearchFilms } from '../../services/filmsAPI';
import s from './MoviesPage.module.css';
import { validate } from 'uuid';

const anonymusImg =
  'https://upload.wikimedia.org/wikipedia/commons/e/e0/Anonymous.svg';

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
      <ul className={s.galleryList}>
        {findFilms.map(({ id, title, name, poster_path }) => (
          <li key={id} className={s.galleryItem}>
            <Link className={s.link} to={`/movies/${id}`}>
              <img
                className={s.image}
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500${poster_path}`
                    : anonymusImg
                }
                alt={name || title}
              />
              <h3 className={s.filmTitle}>{name || title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default MoviesPage;
