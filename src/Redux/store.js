import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userReducer'

export default configureStore({
    reducer: {
        //here userDetail is collection or reducer Name all will store
        userDetail : userReducer,
    },
  })    