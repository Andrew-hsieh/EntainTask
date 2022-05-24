import { createSlice, createAction, PayloadAction } from "@reduxjs/toolkit";

export const UPDATE_ALERT_CONTENT = "UPDATE_ALERT_CONTENT";
export const UPDATE_LOADER_STATUS = "UPDATE_LOADER_STATUS";
export const UPDATE_TOKEN_STATUS = "UPDATE_TOKEN_STATUS";

export interface AlertContent {
  title: string;
  content: string;
  direction?: "row" | "column";
  action?: () => void;
  buttonTitle?: string;
  buttonArray?: Array<AlertButton>;
  paddingBottom?: number;
}

interface AlertButton {
  title: string;
  action?: () => void;
}

export type UIAction =
  | updateALertContentAction
  | updateLoaderStatusAction
  | updateTokenStatusAction;

const signOutAction: any = createAction("signout");
const tokenExpiredAction: any = createAction("tokenExpired");

interface updateALertContentAction {
  type: typeof UPDATE_ALERT_CONTENT;
  payload: AlertContent;
}

interface updateLoaderStatusAction {
  type: typeof UPDATE_LOADER_STATUS;
  payload: boolean;
}

interface updateTokenStatusAction {
  type: typeof UPDATE_TOKEN_STATUS;
  payload: boolean;
}

interface UISelectorProps {
  ui: UIState;
}

export interface UIState {
  isLoading: boolean;
  alertContent: AlertContent | null;
  isTokenExpired: boolean;
  isInternetConnected: boolean;
}



const initialState: UIState = {
  isLoading: false,
  isInternetConnected: false,
  alertContent: null,
  isTokenExpired: false,
};

const changeInternetConnectivityStateReducer = (
  state: UIState,
  action: PayloadAction<boolean>
) => {
  state.isInternetConnected = action.payload;
};

const updateLoaderStatusReducer = (
  state: UIState,
  action: PayloadAction<boolean>
) => {
  state.isLoading = action.payload;
};

const updateAlertContentReducer = (
  state: UIState,
  action: PayloadAction<AlertContent | null>
) => {
  state.alertContent = action.payload;
};

const updateTokenStatusReducer = (
  state: UIState,
  action: PayloadAction<boolean>
) => {
  state.isTokenExpired = action.payload;
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  extraReducers: {
    [signOutAction]: (state) => {
      return { ...state, isLoading: false, alertContent: null };
    },
    [tokenExpiredAction]: (state) => {
      return { ...state, isTokenExpired: true };
    },
  },
  reducers: {
    changeInternetConnectivityState: changeInternetConnectivityStateReducer,
    updateLoaderStatus: updateLoaderStatusReducer,
    updateAlertContent: updateAlertContentReducer,
    updateTokenStatus: updateTokenStatusReducer,
  },
});

const {
  changeInternetConnectivityState,
  updateLoaderStatus,
  updateAlertContent,
  updateTokenStatus,
  updateTerminalLogout,
} = uiSlice.actions;

const selectInternetConnectivity = ({ ui }: UISelectorProps) => ui.isInternetConnected;
const selectLoader = ({ ui }: UISelectorProps) => ui.isLoading;
const selectAlertContent = ({ ui }: UISelectorProps) => ui.alertContent;
const selectIsTokenExpired = ({ ui }: UISelectorProps) => ui.isTokenExpired;

const uiSliceReducer = uiSlice.reducer;

export {
  uiSliceReducer,
  changeInternetConnectivityState,
  updateLoaderStatus,
  selectLoader,
  updateAlertContent,
  selectAlertContent,
  selectIsTokenExpired,
  updateTokenStatus,
  selectInternetConnectivity,
};

