import {createReducer} from '@reduxjs/toolkit';
import {Films} from '../types/film';
import {changeGenre, loadFilms, setDataLoadedStatus} from './action';

type InitialState = {
  genre: string,
  films: Films,
  isDataLoaded: boolean,
};

const initialState: InitialState = {
  genre: 'All genres',
  films: [],
  isDataLoaded: false,
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
    });
});

export {reducer};
