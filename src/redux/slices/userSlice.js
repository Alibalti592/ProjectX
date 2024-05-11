import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  location: {},
  token: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      return {
        ...state,
        user: action.payload,
      };
    },
    setUserLocation: (state, action) => {
      return {
        ...state,
        location: action.payload,
      };
    },
    setUserToken: (state, action) => {
      return {
        ...state,
        token: action.payload,
      };
    },
    clearUser: (state) => {
      return {
        ...state,
        user: {},
        token: null,
        location: {},
      };
    },
    clearUserToken: (state) => {
      return {
        ...state,

        token: null,
      };
    },
  },
});

export const {
  setUser,
  setUserLocation,
  setUserToken,
  clearUser,
  clearUserToken,
} = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectUserLocation = (state) => state.user.location;
export const selectUserToken = (state) => state.user.token;

export default userSlice.reducer;
