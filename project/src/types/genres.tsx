export enum GenreList {
  AllGenres = 'AllGenres',
  Comedies = 'Comedies',
  Crime = 'Crime',
  Documentary = 'Documentary',
  Dramas = 'Dramas',
  Horror = 'Horror',
  KidsAndFamily = 'KidsAndFamily',
  Romance = 'Romance',
  SciFi = 'SciFi',
  Thrillers = 'Thrillers',
}

export type Genre = {
  title: string,
  value: GenreList,
};
