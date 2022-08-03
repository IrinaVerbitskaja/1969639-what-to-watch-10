import {createReducer} from '@reduxjs/toolkit';
import {filmList} from '../mocks/film';
import {changeGenre} from './action';

const initialState = {
  genre: 'All genres',
  films: filmList
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    });
});

export {reducer};
