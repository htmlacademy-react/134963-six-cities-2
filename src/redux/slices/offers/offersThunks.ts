import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { FullOffer } from '../../../types/offer';
import { AppDispatch, State } from '../../../types/state';
import { ApiRoute } from '../../../const';


export const fetchOffers = createAsyncThunk<FullOffer[], undefined, { dispatch: AppDispatch; state: State; extra: AxiosInstance }>(
  'data/fetchOffers',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<FullOffer[]>(ApiRoute.Offers);
    return data;
  }
);
