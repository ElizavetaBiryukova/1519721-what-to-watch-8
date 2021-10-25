import { Review } from '../../types/reviews';
import { formatHumanizedDate } from '../../utils/common';
import { formatRating } from '../../utils/data';

type TabsReviewsItemProps = {
  review: Review,
};

function TabsReviewsItem(props: TabsReviewsItemProps): JSX.Element {
  const { review } = props;
  const { comment, date, user, rating } = review;
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>
        <footer className="review__details">
          <cite className="review__author">{user.name}</cite>
          <time
            className="review__date"
            dateTime={formatHumanizedDate(date)}
          >
            {formatHumanizedDate(date)}
          </time>
        </footer>
      </blockquote>

      <div className="review__rating">{formatRating(rating)}</div>
    </div>
  );
}

export default TabsReviewsItem;
