import {createSelector} from 'reselect';
import {GenreList} from '../../types/genres';
import {State} from '../../types/state';

//  Для чтения состояния из хранилища применяются селекторы.
//  Если требуется модифицировать результат при чтении
// (например, отфильтровать), применяется мемоизация (пакет reselect)

const getGenre = (state: State) => state.genre;
const getFilms = (state: State) => state.listFilms;

const filterFilms = createSelector(
  [getFilms, getGenre],
  (films, genre) => {
    if (genre === GenreList.AllGenres) {
      return films;
    }

    return films.filter((film) => film.genre.value === genre);
  },
);

export {filterFilms};
