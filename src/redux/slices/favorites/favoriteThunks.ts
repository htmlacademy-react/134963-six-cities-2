import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { FullOffer } from '../../../types/offer';
import { ApiRoute, FavoriteStatus } from '../../../const';
import { AppDispatch, State } from '../../../types/state';

interface FavoriteData {
  offerId: string;
  status: FavoriteStatus;
}

interface FavoriteProps {
  offerId: string;
  status: FavoriteStatus;
}


export const fetchFavoriteAction = createAsyncThunk<FullOffer[], undefined, { dispatch: AppDispatch; state: State; extra: AxiosInstance }>(
  'data/fetchFavoriteAction',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<FullOffer[]>(ApiRoute.Favorites);
    return data;
  }
);


export const toggleFavoriteAction = createAsyncThunk<FavoriteProps, FavoriteData, { dispatch: AppDispatch; state: State; extra: AxiosInstance }>(
  'data/toggleFavoriteAction',
  async ({ offerId, status }, { extra: api }) => {
    await api.post(`${ApiRoute.Favorites}/${offerId}/${status}`);
    return { offerId, status };
  }
);
