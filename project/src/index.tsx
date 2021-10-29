import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './components/app/app';
import { films } from './mocks/films';
import { reviews } from './mocks/reviews';
import { reducer } from './store/reducer';

const InfoPromoFilm = {
  TITLE: 'The Grand Budapest Hotel',
  GENRE: 'Drama',
  RELEASE_DATE: 2014,
  CARDS_COUNT: 20,
};

const store = createStore(
  reducer,
  composeWithDevTools(),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        title={InfoPromoFilm.TITLE}
        genre={InfoPromoFilm.GENRE}
        releaseDate={InfoPromoFilm.RELEASE_DATE}
        films={films}
        reviews={reviews}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
