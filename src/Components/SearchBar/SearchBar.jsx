import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './Searchbar.module.css';

const Searchbar = ({ onSubmit }) => {
  const [searchQuery, setsearchQuery] = useState('');

  const handleChange = e => {
    setsearchQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(searchQuery);
    setsearchQuery('');
  };

  return (
    <header className={s.searchBar}>
      <form className={s.searchForm} onSubmit={handleSubmit}>
        <button type="submit" className={s.button}>
          <span className={s.button_label}>Search</span>
        </button>

        <input
          className={s.form_input}
          type="text"
          value={searchQuery}
          placeholder="Search movies"
          onChange={handleChange}
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default Searchbar;
