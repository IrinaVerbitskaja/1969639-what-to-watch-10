import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import App from './components/app/app';
import {film} from './mocks/film';
import {commentsFilm} from './mocks/review';
import {store} from './store/index';
import {fetchFilmAction} from './store/api-actions';

store.dispatch(fetchFilmAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App
        comments = {commentsFilm}
        film = {film}
      />
    </Provider>
  </React.StrictMode>,
);
