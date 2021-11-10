import {Films} from './films';
import {AuthorizationStatus} from '../const';
import {GenreList} from './genres';
import {AuthInfo} from '../types/auth-info';

type State = {
  genre: GenreList,
  films: Films,
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
  authInfo: AuthInfo,
};

export type {State};
