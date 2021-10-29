import {ActionType, Actions} from '../types/action';
import {State} from '../types/state';
import {films} from '../mocks/films';
import {GenreList} from '../types/genres';

const initialState = {
  genre: GenreList.AllGenres,
  listFilms: films,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.SetGenres:
      return {...state, genre: action.payload.genre};
    default:
      return state;
  }
};

export {reducer};
