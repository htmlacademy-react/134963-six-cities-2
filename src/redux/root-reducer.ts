import {combineReducers} from '@reduxjs/toolkit';
import { userSlice } from './slices/user/userSlice';
import { offersSlice } from './slices/offers/offersSlice';
import { uiSlice } from './slices/ui/ui';


export const rootReducer = combineReducers({
  [userSlice.name]: userSlice.reducer,
  [offersSlice.name]: offersSlice.reducer,
  [uiSlice.name]: uiSlice.reducer,
});
