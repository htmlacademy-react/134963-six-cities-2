import { createAction } from '@reduxjs/toolkit';
import { FullOffer } from '../../types/offer';

const SET_CITY = 'SET_CITY';
const SET_OFFERS = 'SET_OFFERS';
const SET_ACTIVE_OFFER = 'SET_ACTIVE_OFFER';

export const setCity = createAction<string>(SET_CITY);
export const setOffers = createAction<FullOffer[]>(SET_OFFERS);
export const setActiveOffer = createAction<string | null>(SET_ACTIVE_OFFER);
