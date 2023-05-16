import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userReducer'
import FilterReducer from './FilterReducer';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


//fro redux store to make it persistent 
const persistConfig = {
    key: 'root',
    storage,
  }

  const persistedReducer = persistReducer(persistConfig, userReducer);




export const store = configureStore({
    reducer: {
        userDetail : persistedReducer,
        Postfilter : FilterReducer
    },
  });

  export const persistor  = persistStore(store);