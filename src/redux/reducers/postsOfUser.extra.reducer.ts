import {createAsyncThunk} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {postApiService} from "../../services/post.api.service";

export let loadPostsOfUser = createAsyncThunk("postSlice/loadPostsOfUser", async (id: number, thunkAPI) => {
    try {
        let posts = await postApiService.getPostsById(id)
        return thunkAPI.fulfillWithValue(posts)
    } catch (e) {
        let error = e as AxiosError
        return thunkAPI.rejectWithValue(error?.response?.data)
    }
})