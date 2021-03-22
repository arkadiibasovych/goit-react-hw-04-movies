import { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import HomePage from './Components/HomePage';

import s from './App.module.css';

const App = () => (
  <>
    <ul className={s.list}>
      <li className={s.listItem}>
        <NavLink to="/" className={s.navLink} activeClassName={s.navLinkActive}>
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
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/movies" />
      <Route component={HomePage} />
    </Switch>
  </>
);

export default App;
