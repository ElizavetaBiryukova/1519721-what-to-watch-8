import { Genre } from './genres';

type Film = {
  id: number,
  name: string,
  posterImage: string,
  previewImage: string,
  backgroundImage: string,
  backgroundColor: string,
  videoLink: string,
  previewVideoLink: string,
  description: string,
  rating: number,
  scoresCount: number,
  director: string,
  starring: string[],
  runTime: number,
  genre: Genre,
  released: number,
  isFavorite: boolean,
}

type Films = Film[];

export type {Film, Films};
