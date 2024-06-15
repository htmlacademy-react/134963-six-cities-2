import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { Comment } from '../../../types/comments';
import { ApiRoute } from '../../../const';
import { AppDispatch, State } from '../../../types/state';

type CommentProps = {
  body: {
    comment: string;
    rating: number;
  };
  offerId: string;
}

export const fetchCommentsAction = createAsyncThunk<Comment[], string, { dispatch: AppDispatch; state: State; extra: AxiosInstance }>(
  'data/fetchComments',
  async (offerId, { extra: api }) => {
    const { data } = await api.get<Comment[]>(`${ApiRoute.Comments}/${offerId}`);
    return data;
  }
);

export const addCommentAction = createAsyncThunk<Comment, CommentProps, { dispatch: AppDispatch; state: State; extra: AxiosInstance }>(
  'data/addComment',
  async ({offerId, body}, { extra: api }) => {
    const response = await api.post<Comment>(`${ApiRoute.Comments}/${offerId}`, body);
    return response.data;

  }
);
