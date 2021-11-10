import {APIRoute, AuthorizationStatus, AppRoute} from '../const';
import {dropToken, saveToken, Token} from '../services/token';
import {ThunkActionResult} from '../types/action';
import {AuthData} from '../types/auth-data';
import {TypesFilmsFromServer} from '../types/films';
import {loadFilms, requireAuthorization, requireLogout, redirectToRoute, requireAuthInfo} from './action';
import {adaptAuthInfoToClient} from '../services/adaptor';

const fetchFilmAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<TypesFilmsFromServer[]>(APIRoute.Films);
    dispatch(loadFilms(data));
  };

const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const { data } = await api.get(APIRoute.Login);
    if(!data) {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    } else {
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(requireAuthInfo(adaptAuthInfoToClient(data)));
    }
  };

const loginAction = ({login: email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data: {token}} = await api.post<{token: Token}>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Main));
  };


const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireLogout());
  };

export {fetchFilmAction, checkAuthAction, loginAction, logoutAction};
