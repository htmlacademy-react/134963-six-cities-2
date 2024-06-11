import { TRatingOption } from './types/offer-comment-form';

export enum AppRoute {
  Login = '/login',
  Favorites = '/favorites',
  Main = '/',
  Offer = '/offer',
}

export enum ApiRoute {
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
  Favorites = '/favorite',
}

export enum NameSpace {
  UserInterface = 'UI',
  Offers = 'OFFERS',
  User = 'USER',
  Comments = 'COMMENTS',
  Offer = 'OFFER',
  Favorites = 'FAVORITES',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const ratingOptions: TRatingOption[] = [
  { value: '5', title: 'perfect' },
  { value: '4', title: 'good' },
  { value: '3', title: 'not bad' },
  { value: '2', title: 'badly' },
  { value: '1', title: 'terribly' },
];

export const enum RequestStatus { Idle, Loading, Success, Failed }
export const enum FavoriteStatus { Removed, Added }

export const MAX_RATING = 5;

export const MIN_REVIEW_LENGTH = 50;
export const MAX_REVIEW_LENGTH = 300;

export const LOCATIONS = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const BACKEND_URL = 'https://13.design.htmlacademy.pro/six-cities';
export const REQUEST_TIMEOUT = 5000;
export const AUTH_TOKEN_KEY_NAME = '6-cities-token';

export const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
export const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{2,}$/;

export const NEAR_OFFERS_COUNT = 3;
export const COMMENTS_COUNT = 10;

export const SORT_TYPES = [
  { name: 'Popular' },
  { name: 'Price: low to high' },
  { name: 'Price: high to low' },
  { name: 'Top rated first' },
];

