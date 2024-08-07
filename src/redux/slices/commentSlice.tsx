import {createSlice, isRejected} from "@reduxjs/toolkit";
import {ICommentModel} from "../../models/commentModel";
import {loadComments} from "../reducers/comments.extra.reducers";
import {loadCommentsOfUser} from "../reducers/commentsOfPost.extra.reducers";

type commentSliceType = {
    comments: ICommentModel[],
    isLoaded: boolean,
    error: string,
    comment: ICommentModel | null
}

const initialState: commentSliceType = {
    comments: [],
    isLoaded: false,
    error: "",
    comment: null
}

export const commentSlice = createSlice({
    name: "commentSlice",
    initialState: initialState,
    reducers: {
    },
    extraReducers: builder =>
        builder
            .addCase(loadComments.fulfilled, (state, action) => {
                state.comments = action.payload;
                state.isLoaded = true
            })
            .addCase(loadCommentsOfUser.fulfilled, (state, action) => {
                state.comments = action.payload;
                state.isLoaded = true
            })
            .addMatcher(isRejected(loadCommentsOfUser, loadComments), (state, action) => {
                state.error = action.payload as string
            })
})

export const commentAction = {
    ...commentSlice.actions,
    loadCommentsOfUser,
    loadComments
}