import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {State} from '../../types/state';
import Logo from '../logo/logo';
import {Film, Films} from '../../types/films';
import {Reviews} from '../../types/reviews';
import Tabs from '../tabs/tabs';
import ListOfFilms from '../list-of-films/list-of-films';
import {AuthorizationStatus} from '../../const';
import UserBlockLogIn from '../user-block/user-block-log-in';
import UserBlockLogOut from '../user-block/user-block-log-out';

type FilmsScreenProps = {
  film: Film;
  reviews: Reviews;
  films: Films;
}

function FilmsScreen(props: FilmsScreenProps): JSX.Element {
  const {film, reviews} = props;
  const {posterImage, name, genre, released, id} = film;
  const showMoreLikeFilms = props.films
    .filter((item) => item.id !== film.id && item.genre === film.genre)
    .slice(0, 4);
  const auth = useSelector((state: State) => state.authorizationStatus);
  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={posterImage} alt={name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <div className="logo">
              <Logo />
            </div>

            {auth === AuthorizationStatus.Auth ? <UserBlockLogIn /> : <UserBlockLogOut />}
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <Link to={`/films/${id}/review`} className="btn film-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327"/>
            </div>

            <Tabs film={film} reviews={reviews} />

          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <ListOfFilms films={showMoreLikeFilms} />
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>?? 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default FilmsScreen;
