import {createAsyncThunk} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {postApiService} from "../../services/post.api.service";

export const loadPosts = createAsyncThunk("postSlice/loadPosts", async (_, thunkAPI) => {
    try {
        let posts = await postApiService.getAllPosts()
        return thunkAPI.fulfillWithValue(posts)
    } catch (e) {
        let error = e as AxiosError
        return thunkAPI.rejectWithValue(error?.response?.data)
    }
})
