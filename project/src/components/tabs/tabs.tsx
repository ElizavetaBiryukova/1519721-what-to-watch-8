import { useState } from 'react';
import TabsOverviews from './tabs-overviews';
import TabsDetails from './tabs-details';
import TabsReviews from './tabs-reviews';
import { Film } from '../../types/films';
import { Reviews } from '../../types/reviews';

type TabsProps = {
  film: Film;
  reviews: Reviews;
}

function Tabs(props: TabsProps): JSX.Element {
  const { film, reviews } = props;

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index: number) => {
    setToggleState(index);
  };

  const getToggleTab = (tab: number) => {
    switch (tab) {
      case 1:
        return <TabsOverviews film={film}/>;
      case 2:
        return <TabsDetails film={film}/>;
      case 3:
        return <TabsReviews reviews={reviews}/>;
    }
  };

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li
            className={toggleState === 1 ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}
            onClick={() => toggleTab(1)}
          >
            <span className="film-nav__link">Overview</span>
          </li>
          <li
            className={toggleState === 2 ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}
            onClick={() => toggleTab(2)}
          >
            <span className="film-nav__link">Details</span>
          </li>
          <li
            className={toggleState === 3 ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}
            onClick={() => toggleTab(3)}
          >
            <span className="film-nav__link">Reviews</span>
          </li>
        </ul>
      </nav>
      {getToggleTab(toggleState)}
    </div>
  );

}

export default Tabs;
