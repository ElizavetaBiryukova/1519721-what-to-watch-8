import { ChangeEvent, useState } from 'react';

function ReviewForm(): JSX.Element {
  const [review, setReview] = useState('');
  const [rating, setRating] = useState('');

  const isFormInvalid = Boolean(rating === undefined || review.length < 40);

  function handleInputChange({target}: ChangeEvent<HTMLInputElement>) {
    setRating(target.value);
  }

  function handleTextAreaChange({target}: ChangeEvent<HTMLTextAreaElement>) {
    setReview(target.value);
  }

  return (

    <form action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          <input className="rating__input" id="star-10" type="radio" name="rating" value="10"
            onChange={handleInputChange}
          />
          <label className="rating__label" htmlFor="star-10">Rating 10</label>

          <input className="rating__input" id="star-9" type="radio" name="rating" value="9"
            onChange={handleInputChange}
          />
          <label className="rating__label" htmlFor="star-9">Rating 9</label>

          <input className="rating__input" id="star-8" type="radio" name="rating" value="8" checked
            onChange={handleInputChange}
          />
          <label className="rating__label" htmlFor="star-8">Rating 8</label>

          <input className="rating__input" id="star-7" type="radio" name="rating" value="7"
            onChange={handleInputChange}
          />
          <label className="rating__label" htmlFor="star-7">Rating 7</label>

          <input className="rating__input" id="star-6" type="radio" name="rating" value="6"
            onChange={handleInputChange}
          />
          <label className="rating__label" htmlFor="star-6">Rating 6</label>

          <input className="rating__input" id="star-5" type="radio" name="rating" value="5"
            onChange={handleInputChange}
          />
          <label className="rating__label" htmlFor="star-5">Rating 5</label>

          <input className="rating__input" id="star-4" type="radio" name="rating" value="4"
            onChange={handleInputChange}
          />
          <label className="rating__label" htmlFor="star-4">Rating 4</label>

          <input className="rating__input" id="star-3" type="radio" name="rating" value="3"
            onChange={handleInputChange}
          />
          <label className="rating__label" htmlFor="star-3">Rating 3</label>

          <input className="rating__input" id="star-2" type="radio" name="rating" value="2"
            onChange={handleInputChange}
          />
          <label className="rating__label" htmlFor="star-2">Rating 2</label>

          <input className="rating__input" id="star-1" type="radio" name="rating" value="1"
            onChange={handleInputChange}
          />
          <label className="rating__label" htmlFor="star-1">Rating 1</label>
        </div>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text">
          value={review}
          onChange={handleTextAreaChange}
        </textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit" disabled={isFormInvalid}>Post</button>
        </div>

      </div>
    </form>

  );
}

export default ReviewForm;
