import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { dataCarReducer } from './carsData/createSlice';

import { 
  persistStore, 
  
  persistReducer, 
  FLUSH, 
  REHYDRATE, 
  PAUSE, 
  PERSIST, 
  PURGE, 
  REGISTER 
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

const dataPersistConfig = {
  key: 'cars',
  storage,
  whitelist: [],
};

const rootReducer = combineReducers({
    cars: persistReducer(dataPersistConfig, dataCarReducer),
    
})



export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
  
  export const persistor = persistStore(store);