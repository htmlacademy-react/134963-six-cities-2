import {combineReducers} from '@reduxjs/toolkit';
import { userSlice } from '../slices/user/userSlice';
import { offerSlice } from '../slices/offers/offersSlice';
import { uiSlice } from '../slices/ui/ui';


export const rootReducer = combineReducers({
  [userSlice.name]: userSlice.reducer,
  [offerSlice.name]: offerSlice.reducer,
  [uiSlice.name]: uiSlice.reducer,
});
