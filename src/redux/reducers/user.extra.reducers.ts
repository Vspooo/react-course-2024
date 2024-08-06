import {createAsyncThunk} from "@reduxjs/toolkit";
import {userApiService} from "../../services/user.api.service";
import {AxiosError} from "axios";

export let loadUser = createAsyncThunk("userSlice/loadUser", async (id: number, thunkAPI) => {
    try {
        let user = await userApiService.getUserById(id)
        return thunkAPI.fulfillWithValue(user)
    } catch (e) {
        let error = e as AxiosError
        return thunkAPI.rejectWithValue(error?.response?.data)
    }
})