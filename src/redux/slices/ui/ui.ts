import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LOCATIONS, SORT_TYPES } from '../../../const';

export interface UiState {
  city: string;
  selectedSort: string;
}

const initialState: UiState = {
  city: LOCATIONS[0],
  selectedSort: SORT_TYPES[0].name
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    selectSort: (state, action: PayloadAction<string>) => {
      state.selectedSort = action.payload;
    }
  }
});

export const selectCity = (state: { ui: UiState }) => state.ui.city;
export const selectSelectedSort = (state: { ui: UiState }) => state.ui.selectedSort;

export const { setCity, selectSort } = uiSlice.actions;

export {uiSlice};
