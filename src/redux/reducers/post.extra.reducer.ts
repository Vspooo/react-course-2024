import {createAsyncThunk} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {postApiService} from "../../services/post.api.service";

export let loadPost = createAsyncThunk("postSlice/loadPost", async (id: number, thunkAPI) => {
    try {
        let post = await postApiService.getPostById(id)
        return thunkAPI.fulfillWithValue(post)
    } catch (e) {
        let error = e as AxiosError
        return thunkAPI.rejectWithValue(error?.response?.data)
    }
})