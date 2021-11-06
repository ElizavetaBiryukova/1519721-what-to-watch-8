import {Film, TypesFilmsFromServer} from '../types/films';

function adaptToClient(film: TypesFilmsFromServer): Film {

  const adaptedFilm =
    {
      'id': film.id,
      'name': film.name,
      'posterImage': film.poster_image,
      'previewImage': film.preview_image,
      'backgroundImage': film.background_image,
      'backgroundColor': film.background_color,
      'videoLink': film.video_link,
      'previewVideoLink': film.preview_video_link,
      'description': film.description,
      'scoresCount': film.scores_count,
      'rating': film.rating,
      'director': film.director,
      'starring': film.starring,
      'runTime': film.run_time,
      'released': film.released,
      'genre': film.genre,
      'isFavorite': film.is_favorite,
    };
  return adaptedFilm;
}

export {adaptToClient};
