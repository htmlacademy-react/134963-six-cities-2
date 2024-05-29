import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { Comment } from '../../../types/comments';
import { ApiRoute } from '../../../const';
import { AppDispatch, State } from '../../../types/state';


export const fetchCommentsAction = createAsyncThunk<Comment[], string, { dispatch: AppDispatch; state: State; extra: AxiosInstance }>(
  'data/fetchComments',
  async (offerId, { extra: api }) => {
    const { data } = await api.get<Comment[]>(`${ApiRoute.Comments}/${offerId}`);
    return data;
  }
);

export const addCommentAction = createAsyncThunk<Comment, string, { dispatch: AppDispatch; state: State; extra: AxiosInstance }>(
  'data/addComment',
  async (offerId, { extra: api }) => {
    const { data } = await api.get<Comment>(`${ApiRoute.Comments}/${offerId}`);
    return data;
  }
);
