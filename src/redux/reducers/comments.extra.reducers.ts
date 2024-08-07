import {createAsyncThunk} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {commentApiService} from "../../services/comment.api.service";

export const loadComments = createAsyncThunk("commentSlice/loadComments", async (_, thunkAPI) => {
    try {
        let comments = await commentApiService.getAllComments()
        return thunkAPI.fulfillWithValue(comments)
    } catch (e) {
        let error = e as AxiosError
        return thunkAPI.rejectWithValue(error?.response?.data)
    }
})
