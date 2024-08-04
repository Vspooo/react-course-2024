import {createAsyncThunk} from "@reduxjs/toolkit";
import {userApiService} from "../../../services/user.api.service";
import {AxiosError} from "axios";

export const loadUsers = createAsyncThunk(
    "userSlice/loadUser",
    async (_, thunkAPI)=>{
        try {
         let response = await userApiService.getUsers()
         return thunkAPI.fulfillWithValue(response)
        }catch (e){
            let error = e as AxiosError
            return thunkAPI.rejectWithValue(error)
        }
    }
)