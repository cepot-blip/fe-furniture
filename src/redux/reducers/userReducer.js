/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const initialState = {
  // id: '',
  name: '',
  // password: '',
  email: '',
  phone_number: '',
  // loginData: '',
  role: '',
  // token: '',
};

const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData(state, action) {
      console.log('Payload', action.payload);
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.phone_number = action.payload.phone_number;
      // state.loginData = action.payload.loginData;
      state.role = action.payload.role;
      // state.token = action.payload.token;

      Cookies.set('token', action.payload.token);
    },
    resetUserData(state) {
      state.userData = initialState.userData;
    },
  },
});

export const { setUserData, resetUserData } = userReducer.actions;
export default userReducer.reducer;
