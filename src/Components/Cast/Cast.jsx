import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from '../../services/filmsAPI';
import s from './Cast.module.css';

const anonymusImg =
  'https://upload.wikimedia.org/wikipedia/commons/e/e0/Anonymous.svg';

const Cast = () => {
  const [cast, setCast] = useState();
  const { movieId } = useParams();
  useEffect(() => {
    if (movieId && fetchCast(movieId).then(setCast));
  }, [movieId]);

  return (
    <>
      {cast && (
        <ul className={s.list}>
          {cast.map(({ cast_id, profile_path, name, character }) => (
            <li className={s.item} key={cast_id}>
              <img
                className={s.img}
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : anonymusImg
                }
                alt={name}
              />

              <h3 className={s.name}>{name}</h3>
              <span className={s.character}>Charachter: {character}</span>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Cast;
