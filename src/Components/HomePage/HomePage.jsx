import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { fetchTrendingsFilms } from '../../services/filmsAPI';
import s from './HomePage.module.css';

const HomePage = props => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetchTrendingsFilms().then(setFilms);
  }, []);

  return (
    <>
      <h1 className={s.title}>Trending movies of the day</h1>
      <ul className={s.galleryList}>
        {films.map(({ id, title, name, poster_path }) => (
          <li key={id} className={s.galleryItem}>
            <Link className={s.link} to={`/movies/${id}`}>
              <img
                className={s.image}
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
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

export default HomePage;
