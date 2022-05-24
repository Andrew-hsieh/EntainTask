import { createSlice, createAction, PayloadAction } from '@reduxjs/toolkit';
import { FacilitiesProps, TerminalProps } from 'src/types/dashboard';
import { UserProps, ProfileProps } from 'src/types/user';

const signOutAction: any = createAction('signout');
const updateTokenAction: any = createAction('updateToken');


export interface SessionProps {
  access_token: string;
  expires_in: number;
  token_type?: string;
  refresh_token?: string;
  scope?: string;
}

export interface ErrorProps {
  error?: string;
  error_code: string;
  error_description: string;
}

interface UserSelectorProps {
  user: UserDataProps;
}

export interface UserDataProps {
  userData?: UserProps | null;
  tokens?: SessionProps | null;
  selectProfile?: ProfileProps;
  authError?: ErrorProps | null;
}

const initialState: UserDataProps = {
  authError: null,
  tokens: null,
  userData: null,
};

const updateUserTokensReducer = (state: UserDataProps, action: PayloadAction<SessionProps>) => {
  state.tokens = action.payload;
};

const updateUserDataReducer = (state: UserDataProps, action: PayloadAction<any>) => {
  state.userData = action.payload;
};

const updateProfileReducer = (state: UserDataProps, action: PayloadAction<ProfileProps>) => {
  state.selectProfile = action.payload;
};

const updateAuthErrorReducer = (state: UserDataProps, action: PayloadAction<ErrorProps | null>) => {
  state.authError = action.payload;
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [signOutAction]: () => {
      return initialState;
    },
    [updateTokenAction]: (state, action) => {
      console.log('update token in redux', action.payload);
      return { ...state, tokens: action.payload };
    },
  },
  reducers: {
    updateProfile: updateProfileReducer,
    updateUserData: updateUserDataReducer,
    updateAuthError: updateAuthErrorReducer,
    updateUserTokens: updateUserTokensReducer,
  },
});

const { updateUserTokens, updateAuthError, updateUserData, updateProfile } =
  userSlice.actions;

const selectTokens = ({ user }: UserSelectorProps) => user.tokens;
const selectUserData = ({ user }: UserSelectorProps) => user.userData;
const selectAuthError = ({ user }: UserSelectorProps) => user.authError;
const selectProfile = ({ user }: UserSelectorProps) => user.selectProfile;
const selectProfiles = ({ user }: UserSelectorProps) => user.userData?.profiles ?? [];

const userSliceReducer = userSlice.reducer;

export {
  updateUserTokens,
  updateAuthError,
  userSliceReducer,
  selectTokens,
  selectAuthError,
  updateUserData,
  selectUserData,
  selectProfiles,
  selectProfile,
  updateProfile,
};
