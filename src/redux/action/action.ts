import { createAction } from '@reduxjs/toolkit';
import { FullOffer } from '../../types/offer';
import { UserData } from '../../types/auth';
import { AppRoute } from '../../const';

const SET_CITY = 'SET_CITY';
const SET_ACTIVE_OFFER = 'SET_ACTIVE_OFFER';
const SELECT_SORT = 'SELECTED_SORT';
const SET_OFFERS = 'SET_OFFERS';
const SET_LOADING_STATUS = 'SET_LOADING_STATUS';
const SET_USER_DATA = 'SET_USER_DATA';
export const REDIRECT_TO_ROUTE = 'REDIRECT_TO_ROUTE';


export const setCity = createAction<string>(SET_CITY);
export const setOffers = createAction<FullOffer[]>(SET_OFFERS);
export const setActiveOffer = createAction<string | null>(SET_ACTIVE_OFFER);
export const selectSort = createAction<string>(SELECT_SORT);
export const setLoadingStatus = createAction<boolean>(SET_LOADING_STATUS);
export const setUserData = createAction<UserData | null>(SET_USER_DATA);
export const redirectToRoute = createAction<AppRoute>(REDIRECT_TO_ROUTE);
