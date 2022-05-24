import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ReduxStates from '../reduxStates';
import * as ReduxSagas from '../reduxSagas';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [],  // non-persisted reducers
  whitelist: [], // persisted reducers
};

const sagaMiddleware = createSagaMiddleware();

/* create a middleware with default middleware and saga middleware */
const middleware = [sagaMiddleware];

/* configuring store with reducer, middleware, devTools enable and enhancers */
const store = configureStore({
  reducer: persistReducer(persistConfig, ReduxStates.reducers),
  middleware,
});

const persistor = persistStore(store);

/* run the saga middleware with root saga */
sagaMiddleware.run(ReduxSagas.default);

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export { persistor, store };
