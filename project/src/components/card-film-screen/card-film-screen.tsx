import { Link } from 'react-router-dom';
import { Films } from '../../types/films';

type CardFilmScreenType = {
  films: Films;
  onMouseEnter: (id: number) => void;
}

function CardFilmScreen(props: CardFilmScreenType): JSX.Element {
  const { films, onMouseEnter } = props;

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <article key={film.id} className="small-film-card catalog__films-card" id={`film-${film.id}`} onMouseEnter={() => onMouseEnter(film.id)}>
          <div className="small-film-card__image">
            <img src={film.previewImage} alt="War of the Worlds" width="280" height="175" />
          </div>
          <h3 className="small-film-card__title">
            <Link className="small-film-card__link" to={`/films/${film.id}`}>{film.name}</Link>
          </h3>
        </article>
      ))}
    </div >
  );
}

export default CardFilmScreen;
