import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import App from './components/app/app';
import ErrorMessage from './components/error-message/error-message';
import {film} from './mocks/film';
import {commentsFilm} from './mocks/review';
import {store} from './store/index';
import {checkAuthAction, fetchFilmAction} from './store/api-actions';

store.dispatch(fetchFilmAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ErrorMessage />
      <App
        comments = {commentsFilm}
        film = {film}
      />
    </Provider>
  </React.StrictMode>,
);
