import TabsReviewsItem from './tabs-reviews-item';
import { Reviews } from '../../types/reviews';

type TabsReviewsProps = {
  reviews: Reviews,
};

function TabsReviews(props: TabsReviewsProps): JSX.Element {
  const firstColumn: Reviews = props.reviews.slice(0, Math.ceil(props.reviews.length/2));
  const secondColumn: Reviews = props.reviews.slice(-Math.ceil(props.reviews.length/2));

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {firstColumn.map((comment) => (<TabsReviewsItem review={comment} key={comment.id}/>))}
      </div>
      <div className="film-card__reviews-col">
        {secondColumn.map((comment) => (<TabsReviewsItem review={comment} key={comment.id}/>))}
      </div>
    </div>
  );
}

export default TabsReviews;
