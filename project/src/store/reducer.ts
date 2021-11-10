import {ActionType, Actions} from '../types/action';
import {State} from '../types/state';
import {GenreList} from '../types/genres';
import {AuthorizationStatus} from '../const';
import {TypesFilmsFromServer} from '../types/films';
import {adaptToClient} from '../services/adaptor';
import {AuthInfo} from '../types/auth-info';

const initialState = {
  genre: GenreList.AllGenres,
  films: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
  authInfo:{
    avatarUrl: '',
    email: '',
    id: 0,
    name: '',
    token: '',
  },
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.SetGenres:
      return { ...state, genre: action.payload.genre };
    case ActionType.LoadFilms:
      return {...state, films: action.payload.films.map(
        (film: TypesFilmsFromServer) => adaptToClient(film))};
    case ActionType.RequireAuthorization:
      return {...state, authorizationStatus: action.payload, isDataLoaded: true};
    case ActionType.RequireLogout:
      return {...state, authorizationStatus: AuthorizationStatus.NoAuth};
    case ActionType.RequireAuthInfo:
      return { ...state, authInfo: action.payload as AuthInfo};
    default:
      return state;
  }
};

export { reducer };
