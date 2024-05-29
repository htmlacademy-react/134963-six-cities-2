import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LOCATIONS, NameSpace, SORT_TYPES } from '../../../const';

export interface UiState {
  city: string;
  selectedSort: string;
}

const initialState: UiState = {
  city: LOCATIONS[0],
  selectedSort: SORT_TYPES[0].name
};

const uiSlice = createSlice({
  name: NameSpace.UserInterface,
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

export const selectCity = (state: { [NameSpace.UserInterface]: UiState }): string => state[NameSpace.UserInterface].city;
export const selectSelectedSort = (state: { [NameSpace.UserInterface]: UiState }): string => state[NameSpace.UserInterface].selectedSort;

export const { setCity, selectSort } = uiSlice.actions;
export default uiSlice.reducer;
export {uiSlice};
