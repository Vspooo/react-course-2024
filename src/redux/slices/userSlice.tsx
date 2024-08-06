import {IUserModel} from "../../models/userModel";
import {createSlice, isRejected} from "@reduxjs/toolkit";
import {loadUsers} from "../reducers/users.extra.reducers";
import {loadUser} from "../reducers/user.extra.reducers";

type UserSliceType = {
    users : IUserModel[],
    isLoaded : boolean,
    error : string,
    user :IUserModel | null
}

const initialState : UserSliceType = {
    users: [],
    isLoaded: false,
    error : "",
    user  : null
}

export const userSlice = createSlice({
    name:"userSlice",
    initialState: initialState,
    reducers:{
        fillUser : (state,action) => {
            state.user = action.payload
        },
        fillUsers : (state,action) => {
            state.users = action.payload
        }
    },
    extraReducers : builder =>
        builder
            .addCase(loadUsers.fulfilled, (state, action) => {
                state.users = action.payload;
                state.isLoaded = true
            })
            .addCase(loadUser.fulfilled, (state, action)=>{
                state.user = action.payload;
                state.isLoaded = true
            })
            .addMatcher(isRejected(loadUser,loadUsers), (state, action)=>{
                state.error = action.payload as string
            })
})

export const userAction = {
    ...userSlice.actions,
    loadUsers,
    loadUser
}