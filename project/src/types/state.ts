import {Films} from './films';
import {GenreList} from './genres';

export type State = {
  genre: GenreList,
  listFilms: Films,
};
