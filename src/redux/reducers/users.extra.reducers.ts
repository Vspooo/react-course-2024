import {createAsyncThunk} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {userApiService} from "../../services/user.api.service";

export const loadUsers = createAsyncThunk("userSlice/loadUsers", async (_,thunkAPI) => {
    try {
        let users = await userApiService.getAllUsers()
        return thunkAPI.fulfillWithValue(users)
    }catch (e) {
        let error = e as AxiosError
        return thunkAPI.rejectWithValue(error?.response?.data)
    }
})
