import { Route, NavLink, Switch } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import AppBar from './Components/AppBar';
import Loader from './Components/Loader';

const HomePage = lazy(() =>
  import('./Components/HomePage' /* webpackChunkName: "HomePage" */),
);

const MoviesPage = lazy(() =>
  import('./Components/MoviesPage' /* webpackChunkName: "MoviesPage" */),
);

const MovieDetails = lazy(() =>
  import('./Components/MovieDetails' /* webpackChunkName: "MovieDetails" */),
);

const App = () => (
  <>
    <AppBar />
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/movies/:movieId" component={MovieDetails} />
        <Route path="/movies" component={MoviesPage} />

        <Route component={HomePage} />
      </Switch>
    </Suspense>
  </>
);

export default App;
