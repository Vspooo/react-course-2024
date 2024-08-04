import {createAsyncThunk} from "@reduxjs/toolkit";
import {postsApiService} from "../../../services/posts.api.service";
import {AxiosError} from "axios";

export const loadPosts = createAsyncThunk(
    "postSlice/loadPost",
    async(_, thunkAPI) =>{
        try {
            let response = await postsApiService.getPosts()
            return thunkAPI.fulfillWithValue(response)
        }catch (e) {
            let error = e as AxiosError
            return thunkAPI.rejectWithValue(error)
        }
    }
)