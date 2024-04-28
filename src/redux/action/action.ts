import { createAction } from '@reduxjs/toolkit';

const SET_CITY = 'SET_CITY';
const SET_ACTIVE_OFFER = 'SET_ACTIVE_OFFER';
const SELECTED_SORT = 'SELECTED_SORT';

export const setCity = createAction<string>(SET_CITY);
export const setActiveOffer = createAction<string | null>(SET_ACTIVE_OFFER);
export const selectedSort = createAction<string>(SELECTED_SORT);
