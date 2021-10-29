import { setGenres } from '../store/action';

export enum ActionType {
  SetGenres = 'mainScreen/setGenres',
}

export type Actions =
  | ReturnType<typeof setGenres>;
