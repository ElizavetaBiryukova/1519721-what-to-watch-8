import {ActionType} from '../types/action';
import {GenreList} from '../types/genres';

export const setGenres = (genre: GenreList) => ({
  type: ActionType.SetGenres,
  payload: {genre},
} as const);
