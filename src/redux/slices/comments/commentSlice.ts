import { createSlice } from '@reduxjs/toolkit';
import { addCommentAction, fetchCommentsAction } from './commentThunks';
import { NameSpace, RequestStatus } from '../../../const';
import { Comment } from '../../../types/comments';

export interface CommentState {
    comments: Comment[];
    status: RequestStatus;
}

const initialState: CommentState = {
  comments: [],
  status: RequestStatus.Idle,
};


const commentSlice = createSlice({
  extraReducers: (builder) =>
    builder
      .addCase(fetchCommentsAction.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.status = RequestStatus.Success;
      })
      .addCase(fetchCommentsAction.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(fetchCommentsAction.rejected, (state) => {
        state.status = RequestStatus.Failed;
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
      }),
  name: NameSpace.Comments,
  initialState,
  reducers: {},
});

export { commentSlice };
