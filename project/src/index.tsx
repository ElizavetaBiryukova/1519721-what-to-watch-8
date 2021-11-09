import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {createAPI} from './services/api';
import App from './components/app/app';
import {reducer} from './store/reducer';
import {requireAuthorization} from './store/action';
import {fetchFilmAction, checkAuthAction} from './store/api-actions';
import {ThunkAppDispatch} from './types/action';
import {AuthorizationStatus} from './const';
import {redirect} from './store/middlewares/redirect';

const InfoPromoFilm = {
  TITLE: 'The Grand Budapest Hotel',
  GENRE: 'Drama',
  RELEASE_DATE: 2014,
  CARDS_COUNT: 20,
};


const api = createAPI(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth)),
);

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
    applyMiddleware(redirect),
  ),
);

(store.dispatch as ThunkAppDispatch)(checkAuthAction());
(store.dispatch as ThunkAppDispatch)(fetchFilmAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        title={InfoPromoFilm.TITLE}
        genre={InfoPromoFilm.GENRE}
        releaseDate={InfoPromoFilm.RELEASE_DATE}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
