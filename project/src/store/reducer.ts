import {createReducer} from '@reduxjs/toolkit';
import {Films} from '../types/film';
import {changeGenre, loadFilms, setDataLoadedStatus, increaseCountShownFilms, resetCountShownFilms, countShowFilms} from './action';

type InitialState = {
  genre: string,
  films: Films,
  isDataLoaded: boolean,
  countShownFilms: number,
  countFilms: number,
};

const COUNT_SHOWN_FILMS = 8;

const initialState: InitialState = {
  genre: 'All genres',
  films: [],
  isDataLoaded: false,
  countShownFilms: COUNT_SHOWN_FILMS,
  countFilms: [].length,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(increaseCountShownFilms, (state) => {
      state.countShownFilms = state.countShownFilms + COUNT_SHOWN_FILMS;
    })
    .addCase(resetCountShownFilms, (state) => {
      state.countShownFilms = COUNT_SHOWN_FILMS;
    })
    .addCase(countShowFilms, (state, action) => {
      state.countFilms = action.payload;
    });
});

export {reducer};
