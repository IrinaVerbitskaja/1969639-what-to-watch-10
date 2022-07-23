import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {filmList} from './mocks/film';
import {commentsFilm} from './mocks/review';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      filmList = {filmList}
      comments = {commentsFilm}
    />
  </React.StrictMode>,
);
