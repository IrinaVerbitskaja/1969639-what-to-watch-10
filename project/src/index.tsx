import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import App from './components/app/app';
import {filmList, film} from './mocks/film';
import {commentsFilm} from './mocks/review';
import {store} from './store/index';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App
        filmList = {filmList}
        comments = {commentsFilm}
        film = {film}
      />
    </Provider>
  </React.StrictMode>,
);
