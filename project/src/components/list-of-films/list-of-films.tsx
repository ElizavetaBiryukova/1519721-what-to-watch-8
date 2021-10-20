import { useState } from 'react';
import { Films } from '../../types/films';
import CardFilmScreen from '../card-film-screen/card-film-screen';

type ListOfFilmProps = {
  films: Films;
}

function ListOfFilms({ films }: ListOfFilmProps): JSX.Element {
  const [, setFilmCardActive] = useState(0);
  function toggleActiveCard(id: number) {
    setFilmCardActive(id);
  }
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <div className="catalog__films-list">
        {films.map((film) =>
          (
            <CardFilmScreen
              key={film.id}
              film={film}
              onMouseEnter={toggleActiveCard}
            />))}
      </div>
    </section>

  );
}

export default ListOfFilms;
