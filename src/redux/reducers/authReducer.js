/* eslint-disable no-console */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userAuth: {
    id: '',
    name: '',
    password: '',
    email: '',
    phone_number: '',
    role: '',
    loginData: '',
    token: '',
  },
};

const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authStore(state, action) {
      console.log('Payload', action.payload);
      state.userAuth.id = action.payload.id || '';
      state.userAuth.name = action.payload.name || '';
      state.userAuth.email = action.payload.email || '';
      state.userAuth.phone_number = action.payload.phone_number || '';
      state.userAuth.role = action.payload.role || '';
      state.userAuth.loginData = action.payload.loginData || '';
      state.userAuth.token = action.payload.token || '';
    },
    setReset: () => initialState,
  },
});

export const { authStore, setReset } = authReducer.actions;
export default authReducer.reducer;
