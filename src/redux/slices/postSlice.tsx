import {createSlice, isRejected} from "@reduxjs/toolkit";
import {IPostModel} from "../../models/postModel";
import {loadPost} from "../reducers/post.extra.reducer";
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
        fillPost: (state, action) => {
            state.post = action.payload
        },
        fillUsers: (state, action) => {
            state.posts = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(loadPosts.fulfilled, (state, action) => {
                state.posts = action.payload;
                state.isLoaded = true
            })
            .addCase(loadPost.fulfilled, (state, action) => {
                state.post = action.payload;
                state.isLoaded = true
            })
            .addMatcher(isRejected(loadPost, loadPosts), (state, action) => {
                state.error = action.payload as string
            })
})

export const postAction = {
    ...postSlice.actions,
    loadPost,
    loadPosts
}