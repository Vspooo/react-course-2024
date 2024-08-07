import {createAsyncThunk} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {commentApiService} from "../../services/comment.api.service";

export let loadCommentsOfUser = createAsyncThunk("commentSlice/loadCommentsOfPost", async (id: number, thunkAPI) => {
    try {
        let comments = await commentApiService.getCommentsById(id)
        return thunkAPI.fulfillWithValue(comments)
    } catch (e) {
        let error = e as AxiosError
        return thunkAPI.rejectWithValue(error?.response?.data)
    }
})