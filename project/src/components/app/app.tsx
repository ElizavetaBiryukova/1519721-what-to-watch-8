import { connect, ConnectedProps } from 'react-redux';
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
import { State } from '../../types/state';
import Spinner from '../spinner/spinner';

type AppScreenProps = {
  title: string;
  genre: string;
  releaseDate: number;
}

export const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;

const mapStateToProps = ({authorizationStatus, isDataLoaded, films}: State) => ({
  authorizationStatus,
  isDataLoaded,
  films,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector> & AppScreenProps;

function App(props: PropsFromRedux): JSX.Element {
  const {authorizationStatus, isDataLoaded, films} = props;

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return <Spinner />;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <MainScreen {...props} />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.AddReview}
          render={() => (
            <AddReviewScreen
              film={films[0]}
            />)}
          authorizationStatus={AuthorizationStatus.NoAuth}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.Film}>
          <FilmsScreen
            film={films[0]}
            reviews = {[]}
            films={films}
          />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.MyList}
          render={() => (
            <MyListScreen
              {...props}
            />)}
          authorizationStatus={AuthorizationStatus.NoAuth}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.Player}>
          <PlayerScreen
            film={films[0]}
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

export {App};
export default connector(App);
