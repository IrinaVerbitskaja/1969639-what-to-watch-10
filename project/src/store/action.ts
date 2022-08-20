import {createAction} from '@reduxjs/toolkit';
import {Films} from '../types/film';
import {AuthorizationStatus} from '../components/const';

export const changeGenre = createAction<string>('films/changeGenre');

export const loadFilms = createAction<Films>('data/loadFilms');

export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');

export const increaseCountShownFilms = createAction('films/increaseCountShownFilms');

export const resetCountShownFilms = createAction('films/resetCountShownFilms');

export const countShowFilms = createAction<number>('films/countShownFilms');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction<string | null>('films/setError');
