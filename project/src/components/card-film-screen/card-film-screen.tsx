import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { Film } from '../../types/films';
import VideoPlayer from '../video-player/video-player';

const DELAY_TIME = 1000;

type CardFilmScreenType = {
  film: Film;
  onMouseEnter: (id: number) => void;
}

function CardFilmScreen(props: CardFilmScreenType): JSX.Element {
  const { film, onMouseEnter } = props;

  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const onFilmCardHandler = () => {
    onMouseEnter(film.id);
    setIsHovering(true);
  };

  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const clearTime = () => {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }
  };

  useEffect(() => {
    clearTime();
    if (!isHovering) {
      setIsPlaying(false);
    }
    if (isHovering) {
      timer.current = setTimeout(() => setIsPlaying(true), DELAY_TIME);
    }
    return clearTime;
  }, [isHovering]);

  return (
    <article className="small-film-card catalog__films-card" id={`film-${film.id}`}
      onMouseEnter={() => onFilmCardHandler()}
      onMouseLeave={() => setIsHovering(false)}
    >
      {isPlaying
        ? <VideoPlayer previewVideoLink={film.previewVideoLink} previewImage={film.previewImage} />
        :
        <div className="small-film-card__image">
          <img src={film.previewImage} alt={film.name} width="280" height="175" />
        </div>}
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${film.id}`}>{film.name}</Link>
      </h3>
    </article>
  );
}

export default CardFilmScreen;
