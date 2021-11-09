import {useSelector} from 'react-redux';
import {State} from '../../types/state';
import Logo from '../logo/logo';
import { Film } from '../../types/films';
import ReviewForm from '../review-form/review-form';
import { AuthorizationStatus } from '../../const';
import UserBlockLogIn from '../user-block/user-block-log-in';
import UserBlockLogOut from '../user-block/user-block-log-out';

type AddReviewScreenProps = {
  film: Film;
}

function AddReviewScreen(props: AddReviewScreenProps): JSX.Element {
  const { film } = props;
  const { name, previewImage } = film;
  const auth = useSelector((state: State) => state.authorizationStatus);

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={previewImage} alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Logo />
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href="film-page.html" className="breadcrumbs__link">{name}</a>
              </li>
              <li className="breadcrumbs__item">
                <a href="/" className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          {auth === AuthorizationStatus.Auth ? <UserBlockLogIn /> : <UserBlockLogOut />}
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <ReviewForm />
      </div>

    </section>
  );
}

export default AddReviewScreen;
