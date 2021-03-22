import { NavLink } from 'react-router-dom';
import s from './AppBar.module.css';

const AppBar = () => {
  return (
    <nav>
      <ul className={s.list}>
        <li className={s.listItem}>
          <NavLink
            exact
            to="/"
            className={s.navLink}
            activeClassName={s.navLinkActive}
          >
            Home
          </NavLink>
        </li>

        <li className={s.listItem}>
          <NavLink
            to="/movies"
            className={s.navLink}
            activeClassName={s.navLinkActive}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AppBar;
