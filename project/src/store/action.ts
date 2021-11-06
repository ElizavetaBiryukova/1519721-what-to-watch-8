import {ActionType} from '../types/action';
import {GenreList} from '../types/genres';
import {AuthorizationStatus} from '../const';
import {TypesFilmsFromServer} from '../types/films';

const setGenres = (genre: GenreList) => ({
  type: ActionType.SetGenres,
  payload: {genre},
} as const);

const loadFilms = (films: TypesFilmsFromServer[]) => ({
  type: ActionType.LoadFilms,
  payload: {films},
} as const);

const requireAuthorization = (authStatus: AuthorizationStatus) => ({
  type: ActionType.RequireAuthorization,
  payload: authStatus,
} as const);

const requireLogout = () => ({
  type: ActionType.RequireLogout,
} as const);

export {setGenres, loadFilms, requireAuthorization, requireLogout};
