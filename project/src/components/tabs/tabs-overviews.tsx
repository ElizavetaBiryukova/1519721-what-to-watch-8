import { Film } from '../../types/films';
import { getRatingText, formatRating } from '../../utils/data';

type TabsOverviewsProps = {
  film: Film;
};


function TabsOverviews(props: TabsOverviewsProps): JSX.Element {
  const { rating, scoresCount, description, director, starring } = props.film;

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{formatRating(rating)}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getRatingText(rating)}</span>
          <span className="film-rating__count">{scoresCount} ratings</span>
        </p>
      </div>
      <div className="film-card__text">
        {description}
        <p className="film-card__director"><strong>Director: {director}</strong></p>
        <p className="film-card__starring">
          <strong>
            Starring: {starring.join(', ')} and other
          </strong>
        </p>
      </div>
    </>
  );
}

export default TabsOverviews;
