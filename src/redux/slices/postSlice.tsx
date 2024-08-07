import {createSlice, isRejected} from "@reduxjs/toolkit";
import {IPostModel} from "../../models/postModel";
import {loadPostsOfUser} from "../reducers/postsOfUser.extra.reducer";
import {loadPosts} from "../reducers/posts.extra.reducers";

type PostSliceType = {
    posts: IPostModel[],
    isLoaded: boolean,
    error: string,
    post: IPostModel | null
}

const initialState: PostSliceType = {
    posts: [],
    isLoaded: false,
    error: "",
    post: null
}

export const postSlice = createSlice({
    name: "postSlice",
    initialState: initialState,
    reducers: {
    },
    extraReducers: builder =>
        builder
            .addCase(loadPosts.fulfilled, (state, action) => {
                state.posts = action.payload;
                state.isLoaded = true
            })
            .addCase(loadPostsOfUser.fulfilled, (state, action) => {
                state.posts = action.payload;
                state.isLoaded = true
            })
            .addMatcher(isRejected(loadPostsOfUser, loadPosts), (state, action) => {
                state.error = action.payload as string
            })
})

export const postAction = {
    ...postSlice.actions,
    loadPostsOfUser,
    loadPosts
}