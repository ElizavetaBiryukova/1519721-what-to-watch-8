import React, { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import Logo from '../logo/logo';
import ListOfFilms from '../list-of-films/list-of-films';
import { Films } from '../../types/films';
import { FILMS_COUNT } from '../../const';
import { State } from '../../types/state';
import { filterFilms } from '../../store/filter/selectors';
import Genres from '../genre/genres';
import ShowMoreButton from '../show-more-button/show-more-button';
import Spinner from '../spinner/spinner';
import { AuthorizationStatus } from '../../const';
import UserBlockLogIn from '../user-block/user-block-log-in';
import UserBlockLogOut from '../user-block/user-block-log-out';

type MainScreenProps = {
  title: string;
  genre: string;
  releaseDate: number;
  films: Films;
}

const mapStateToProps = (state: State) => ({
  films: filterFilms(state),
  auth: state.authorizationStatus,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedMainProps = PropsFromRedux & MainScreenProps;

function MainScreen({ title, genre, releaseDate, films, auth }: ConnectedMainProps): JSX.Element {
  const [showFilmsCount, setShowFilmsCount] = useState(FILMS_COUNT);
  const showFilms = films.slice(0, showFilmsCount);

  const handleShowMoreClick = () => {
    setShowFilmsCount((count) => FILMS_COUNT + count);
  };

  const resetShowFilmsCount = () => {
    setShowFilmsCount(FILMS_COUNT);
  };

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <div className="logo">
            <Logo />
          </div>

          {auth === AuthorizationStatus.Auth ? <UserBlockLogIn /> : <UserBlockLogOut />}
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{releaseDate}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add" />
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <Genres resetShowFilmsCount={resetShowFilmsCount} />

          {showFilms.length > 0 ? <ListOfFilms films={showFilms} /> : <Spinner />}

          {showFilms.length === showFilmsCount ? <ShowMoreButton handleShowMoreClick={handleShowMoreClick} /> : ''}

        </section>

        <footer className="page-footer">
          <div className="logo">
            <a href="/" className="logo__link logo__link--light">
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
    </>
  );
}

export { MainScreen };
export default connector(MainScreen);
