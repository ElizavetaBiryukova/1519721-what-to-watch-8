import {createSelector} from 'reselect';
import {GenreList} from '../../types/genres';
import {State} from '../../types/state';

const getGenre = (state: State) => state.genre;

const getFilms = (state: State) => state.films;

const filterFilms = createSelector(
  [getFilms, getGenre],
  (films, genre) => {
    if (genre === GenreList.AllGenres) {
      return films;
    }

    return films.filter((film) => film.genre === genre);
  },
);

export {filterFilms};
