import {createReducer} from '@reduxjs/toolkit';
import {Films} from '../types/film';
import {AuthorizationStatus} from '../components/const';
import {changeGenre, loadFilms, setDataLoadedStatus, increaseCountShownFilms, resetCountShownFilms, countShowFilms, requireAuthorization, setError} from './action';

type InitialState = {
  genre: string,
  films: Films,
  isDataLoaded: boolean,
  countShownFilms: number,
  countFilms: number,
  authorizationStatus: string,
  error: string | null,
};

const COUNT_SHOWN_FILMS = 8;

const initialState: InitialState = {
  genre: 'All genres',
  films: [],
  isDataLoaded: false,
  countShownFilms: COUNT_SHOWN_FILMS,
  countFilms: [].length,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
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
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export {reducer};
