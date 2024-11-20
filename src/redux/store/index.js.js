/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
import { configureStore } from '@reduxjs/toolkit';

import authReducer from '../reducers/authReducer';
import userReducer from '../reducers/userReducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    // user: userReducer,
  },
});

export default store;
