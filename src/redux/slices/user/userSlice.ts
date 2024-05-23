import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, RequestStatus } from '../../../const';
import { UserData } from '../../../types/auth';
import { checkAuth, loginAction, logoutAction } from './userThunks';
export interface UserState {
  authorizationStatus: AuthorizationStatus;
  userData: UserData | null;
  requestStatus: RequestStatus;
}

const initialState: UserState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: null,
  requestStatus: RequestStatus.Idle
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.userData = action.payload;
        state.requestStatus = RequestStatus.Success;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.userData = null;
        state.requestStatus = RequestStatus.Failed;
      })
      .addCase(checkAuth.pending, (state) => {
        state.requestStatus = RequestStatus.Loading;
      })
      .addCase(loginAction.pending, (state) => {
        state.requestStatus = RequestStatus.Loading;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.userData = action.payload;
        state.requestStatus = RequestStatus.Success;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.userData = null;
        state.requestStatus = RequestStatus.Failed;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.userData = null;
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.requestStatus = RequestStatus.Success;
      });
  }
});

export const selectAuthorizationStatus = (state: { user: UserState }) => state.user.authorizationStatus;
export const selectUserData = (state: { user: UserState }) => state.user.userData;
export const selectRequestStatus = (state: { user: UserState }) => state.user.requestStatus;

export {userSlice};
