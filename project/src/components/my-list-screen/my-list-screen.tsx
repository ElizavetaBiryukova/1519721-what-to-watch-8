import {useSelector} from 'react-redux';
import {State} from '../../types/state';
import Logo from '../logo/logo';
import { Films } from '../../types/films';
import ListOfFilms from '../list-of-films/list-of-films';
import { AuthorizationStatus } from '../../const';
import UserBlockLogIn from '../user-block/user-block-log-in';
import UserBlockLogOut from '../user-block/user-block-log-out';


type MyListScreenType = {
  films: Films;
}

function MyListScreen({ films }: MyListScreenType): JSX.Element {
  const auth = useSelector((state: State) => state.authorizationStatus);
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Logo />
        </div>

        <h1 className="page-title user-page__title">My list</h1>

        {auth === AuthorizationStatus.Auth ? <UserBlockLogIn /> : <UserBlockLogOut />}
      </header>

      <ListOfFilms films={films} />

      <footer className="page-footer">
        <div className="logo">
          <a href="main.html" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default MyListScreen;
