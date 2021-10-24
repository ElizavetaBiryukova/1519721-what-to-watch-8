import {useState} from 'react';
import TabsOverviews from './tabs-overviews';
import TabsDetails from './tabs-details';
import TabsReviews from './tabs-reviews';
import {Film} from '../../types/films';
import {Reviews} from '../../types/reviews';

type TabsProps = {
  film: Film;
  reviews: Reviews;
}

const tabsTitles = [
  {title: 'Overview'},
  {title: 'Details'},
  {title: 'Reviews'},
];

function Tabs(props: TabsProps): JSX.Element {
  const {film, reviews} = props;

  const [toggleState, setToggleState] = useState(0);

  const getToggleTab = (index: number) => {
    switch (index) {
      case 0:
        return <TabsOverviews film={film} />;
      case 1:
        return <TabsDetails film={film} />;
      case 2:
        return <TabsReviews reviews={reviews} />;
    }
  };

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {tabsTitles.map((item, index) => (
            <li key={item.title}
              className={toggleState === index ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}
              onClick={() => setToggleState(index)}
            >
              <span className="film-nav__link">{item.title}</span>
            </li>
          ))}
        </ul>
      </nav>
      {getToggleTab(toggleState)}
    </div>
  );

}

export default Tabs;
