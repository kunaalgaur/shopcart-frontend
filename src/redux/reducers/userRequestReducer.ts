import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
    signup: {
        loading: boolean,
        error: any,
        user: any,
        token: string | null
    },
    signin: {
        loading: boolean,
        error: any,
        user: any,
        token: string | null
    },
    verifyEmail: {
        loading: boolean,
        isEmailVerified: boolean,
        error: any,
    },
    forgotPassword: {
        loading: boolean,
        error: any,
        mailSent: boolean,
    },
    resetPassword: {
        loading: boolean,
        error: any,
    },
    getUser: {
        loading: boolean,
        error: any,
    },
    updateUser: {
        loading: boolean,
        error: any,
    },
    deleteUser: {
        loading: boolean,
        error: any,
    }
}


const initialState = {
    signup: {
        loading: false,
        error: null,
        user: null,
        token: null
    },
    signin: {
        loading: false,
        error: null,
        user: null,
        token: null
    },
    verifyEmail: {
        loading: false,
        isEmailVerified: false,
        error: null,
    },
    forgotPassword: {
        loading: false,
        error: null,
        mailSent: false,
    },
    resetPassword: {
        loading: false,
        error: null,
    },
    getUser: {
        loading: false,
        error: null,
    },
    updateUser: {
        loading: false,
        error: null,
    },
    deleteUser: {
        loading: false,
        error: null,
    }
} as InitialState

export const userRequests = createSlice({
  name: "USER REQUESTS",
  initialState,
  reducers: {
    // sign up reducers 
    signup_request: (state) => {
        state.signup.loading = true;
        state.signup.error = null;
        state.signup.user = null;
        state.signup.token = null;
    },
    signup_success: (state, action) => {
        state.signup.loading = false;
        state.signup.error = null;
        state.signup.user = action.payload.user;
        state.signup.token = action.payload.token;
    },
    signup_failure: (state, action) => {
        state.signup.loading = false;
        state.signup.error = action.payload.error;
        state.signup.user = null;
        state.signup.token = null;
    },
    
    // sign in reducers 
    signin_request: (state) => {
        state.signup.loading = true;
        state.signup.error = null;
        state.signup.user = null;
        state.signup.token = null;
    },
    signin_success: (state, action) => {
        state.signup.loading = false;
        state.signup.error = null;
        state.signup.user = action.payload.user;
        state.signup.token = action.payload.token;
    },
    signin_failure: (state, action) => {
        state.signup.loading = false;
        state.signup.error = action.payload.error;
        state.signup.user = null;
        state.signup.token = null;
    },
  },
});

export const {
    // sign up reducers 
    signup_request,
    signup_success,
    signup_failure,
    // sign in reducers
} = userRequests.actions;

export default userRequests.reducer;
