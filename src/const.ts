export enum AppRoute {
  Login = '/login',
  Favorites = '/favorites',
  Main = '/',
  Offer = '/offer/:id'
}

export enum ApiRoute {
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const MAX_RATING = 5;

export const MIN_REVIEW_LENGTH = 50;
export const MAX_REVIEW_LENGTH = 300;

export const LOCATIONS = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const BACKEND_URL = 'https://13.design.htmlacademy.pro/six-cities';
export const REQUEST_TIMEOUT = 5000;
export const AUTH_TOKEN_KEY_NAME = 'six-cities-token';

export const SORT_TYPES = [
  { name: 'Popular' },
  { name: 'Price: low to high' },
  { name: 'Price: high to low' },
  { name: 'Top rated first' },
];

