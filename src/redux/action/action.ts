import { createAction } from '@reduxjs/toolkit';

const SET_CITY = 'SET_CITY';
const SET_ACTIVE_OFFER = 'SET_ACTIVE_OFFER';

export const setCity = createAction<string>(SET_CITY);
export const setActiveOffer = createAction<string | null>(SET_ACTIVE_OFFER);
