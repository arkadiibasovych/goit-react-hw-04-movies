import { useState, useEffect } from 'react';
import { Suspense, lazy } from 'react';
import {
  Route,
  useParams,
  NavLink,
  useRouteMatch,
  useHistory,
  useLocation,
  Switch,
} from 'react-router-dom';

import arrow from '../../images/arrow.svg';

import { fetchMovieDetails } from '../../services/filmsAPI';
import s from './MovieDetails.module.css';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);

  const { movieId } = useParams();
  const { url, path } = useRouteMatch();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  const handleClickBack = () => {
    return history.push(location?.state?.from || '/');
  };

  console.log(movie);

  return (
    <div className={s.page}>
      <button className={s.button} onClick={handleClickBack}>
        <img className={s.icon} src={arrow} alt="arrow" />
        Go Back
      </button>
      {movie && (
        <>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className={s.poster}
          />
          <div className={s.about}>
            <h2 className={s.title}>{movie.title}</h2>
            <p className={s.description}>
              User Score: {movie.vote_average * 10 + '%'}
            </p>
            <h3 className={s.subtitle}>Overview</h3>
            <p className={s.description}>{movie.overview}</p>
            <h3 className={s.subtitle}>Genres</h3>
            <ul className={s.genres}>
              {movie.genres.map(genre => (
                <li className={s.genre} key={genre.id}>
                  {genre.name}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
