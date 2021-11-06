import {Films} from './films';
import {AuthorizationStatus} from '../const';
import {GenreList} from './genres';

type State = {
  genre: GenreList,
  films: Films,
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
};

export type {State};
