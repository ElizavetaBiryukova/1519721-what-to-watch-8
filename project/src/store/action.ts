import { ActionType } from '../types/action';
import { GenreList } from '../types/genres';
import { AuthorizationStatus, AppRoute } from '../const';
import { TypesFilmsFromServer } from '../types/films';
import { AuthInfo } from '../types/auth-info';

const setGenres = (genre: GenreList) => ({
  type: ActionType.SetGenres,
  payload: { genre },
} as const);

const loadFilms = (films: TypesFilmsFromServer[]) => ({
  type: ActionType.LoadFilms,
  payload: { films },
} as const);

const requireAuthorization = (authStatus: AuthorizationStatus) => ({
  type: ActionType.RequireAuthorization,
  payload: authStatus,
} as const);

const requireAuthInfo = (authInfo: AuthInfo) => ({
  type: ActionType.RequireAuthInfo,
  payload: authInfo,
} as const);

const requireLogout = () => ({
  type: ActionType.RequireLogout,
} as const);

const redirectToRoute = (url: AppRoute) => ({
  type: ActionType.RedirectToRoute,
  payload: url,
} as const);

export { setGenres, loadFilms, requireAuthorization, requireLogout, redirectToRoute, requireAuthInfo };
