import { IUserModel } from "../../models/userModel"
import {createSlice, isFulfilled} from "@reduxjs/toolkit";
import  {loadUsers} from "../reducers/users/user.extra.reducer";

type UserSliceType = {
    users: IUserModel[],
    isLoaded : boolean
}

const usersInitState: UserSliceType = {
    users: [],
    isLoaded : false
}

export const userSlice = createSlice({
    name: "userSlice",
    initialState: usersInitState,
    reducers : {
        isLoaded : (state) =>{
            state.isLoaded = true
        }
    },
    extraReducers : (builder) =>
        builder
            .addCase(loadUsers.fulfilled, (state,action)=>{
                state.users = action.payload;
                state.isLoaded = true;
            })
            .addCase(loadUsers.rejected, (state,action)=>{
             state.isLoaded = false
            })
            .addMatcher(isFulfilled(loadUsers), (state,action)=>{
                state.isLoaded = true
            })
})

export const usersActions = {
    ...userSlice.actions,
    loadUsers
}