export enum AppRoute {
  AddReview = '/films/:id/review',
  Main= '/',
  FilmList = '/films/:id',
  MyList = '/mylist',
  Player = '/player/:id',
  SignIn = '/login'
}

export enum APIRoute {
  Films = '/films',
  Login = '/login',
  Logout = '/logout',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const TIMEOUT_SHOW_ERROR = 2000;
