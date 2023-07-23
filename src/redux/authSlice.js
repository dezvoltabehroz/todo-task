import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userInfo: {},
    userToken: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginUser: (state, action) => {
            state.userInfo = {
                username : action.payload.username,
                password : action.payload.password
            };
            state.userToken = action.payload.token
        },
    },
})

export const { loginUser } = authSlice.actions;

export default authSlice.reducer
