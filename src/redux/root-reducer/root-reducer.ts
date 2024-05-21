import {combineReducers} from '@reduxjs/toolkit';
import { userSlice } from '../slices/user';
import { offerSlice } from '../slices/offers';
import { uiSlice } from '../slices/ui';


export const rootReducer = combineReducers({
  [userSlice.name]: userSlice.reducer,
  [offerSlice.name]: offerSlice.reducer,
  [uiSlice.name]: uiSlice.reducer,
});
