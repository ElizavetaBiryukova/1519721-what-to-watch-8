import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import MainScreen from '../main-screen/main-screen';
import AddReviewScreen from '../add-review-screen/add-review-screen';
import Error from '../error/error';
import FilmsScreen from '../films-screen/films-screen';
import MyListScreen from '../my-list-screen/my-list-screen';
import PlayerScreen from '../player-screen/player-screen';
import SignInScreen from '../sign-in-screen/sign-in-screen';
import PrivateRoute from '../private-route/private-route';
import { Films, Film } from '../../types/films';
import { Reviews } from '../../types/reviews';

type AppScreenProps = {
  title: string;
  genre: string;
  releaseDate: number;
  films: Films;
  reviews: Reviews;
}

function App({ title, genre, releaseDate, films, reviews }: AppScreenProps): JSX.Element {
  const [firstFilm] = films;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <MainScreen title={title} genre={genre} releaseDate={releaseDate} films={films} />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.AddReview}
          render={() => (
            <AddReviewScreen
              film={firstFilm as Film}
            />)}
          authorizationStatus={AuthorizationStatus.NoAuth}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.Film}>
          <FilmsScreen
            film={firstFilm as Film}
          />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.MyList}
          render={() => (
            <MyListScreen
              films={films}
            />)}
          authorizationStatus={AuthorizationStatus.NoAuth}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.Player}>
          <PlayerScreen
            film={firstFilm as Film}
          />
        </Route>
        <Route exact path={AppRoute.SignIn}>
          <SignInScreen />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </BrowserRouter >
  );
}

export default App;
