import {Genre, GenreList} from '../types/genres';

const genres: Genre[] = [
  {
    title: 'All genres',
    value: GenreList.AllGenres,
  },
  {
    title: 'Crime',
    value: GenreList.Crime,
  },
  {
    title: 'Comedies',
    value: GenreList.Comedies,
  },
  {
    title: 'Documentary',
    value: GenreList.Documentary,
  },
  {
    title: 'Dramas',
    value: GenreList.Dramas,
  },
  {
    title: 'Horror',
    value: GenreList.Horror,
  },
  {
    title: 'Kids & Family',
    value: GenreList.KidsAndFamily,
  },
  {
    title: 'Romance',
    value: GenreList.Romance,
  },
  {
    title: 'Sci-Fi',
    value: GenreList.SciFi,
  },
  {
    title: 'Thrillers',
    value: GenreList.Thrillers,
  },
];

export {genres};
