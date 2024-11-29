/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userAuth: {
    id: '',
    name: '',
    password: '',
    email: '',
    phoneNumber: '',
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
      console.log('payloaded:', action.payload);
      const { payload } = action;
      state.userAuth = {
        ...state.userAuth,
        id: payload.id || '',
        name: payload.name || '',
        password: payload.password || '',
        email: payload.email || '',
        phoneNumber: payload.phoneNumber || '',
        role: payload.role || '',
        loginData: payload.loginData || '',
        token: payload.token || '',
      };
    },
    setReset() {
      return initialState;
    },
  },
});

export const { authStore, setReset } = authReducer.actions;
export default authReducer.reducer;
