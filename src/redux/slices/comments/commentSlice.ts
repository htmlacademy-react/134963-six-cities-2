import { createSelector, createSlice } from '@reduxjs/toolkit';
import { addCommentAction, fetchCommentsAction } from './commentThunks';
import { NameSpace, RequestStatus } from '../../../const';
import { Comment } from '../../../types/comments';
import { State } from '../../../types/state';

export interface CommentState {
    comments: Comment[];
    status: RequestStatus;
}

const initialState: CommentState = {
  comments: [],
  status: RequestStatus.Idle,
};

const commentSlice = createSlice({
  name: NameSpace.Comments,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsAction.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.status = RequestStatus.Success;
      })
      .addCase(fetchCommentsAction.rejected, (state) => {
        state.status = RequestStatus.Failed;
      })
      .addCase(fetchCommentsAction.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(addCommentAction.fulfilled, (state, action) => {
        state.comments.push(action.payload);
        state.status = RequestStatus.Success;
      })
      .addCase(addCommentAction.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(addCommentAction.rejected, (state) => {
        state.status = RequestStatus.Failed;
      });
  }
});

export const selectComments = (state: State) => state[NameSpace.Comments].comments;
export const selectCommentStatus = (state: State) => state[NameSpace.Comments].status;


export const selectCommentsStatus = createSelector(
  [selectCommentStatus],
  (status) => ({
    isLoading: status === RequestStatus.Loading,
    isSuccess: status === RequestStatus.Success,
    isError: status === RequestStatus.Failed,
    isIdle: status === RequestStatus.Idle,
  })
);

export { commentSlice };
