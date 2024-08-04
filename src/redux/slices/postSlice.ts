import {IPostModel} from "../../models/postModel";
import {createSlice, isFulfilled} from "@reduxjs/toolkit";
import {loadPosts} from "../reducers/posts/post.exstra.reducer";

type PostSliceType = {
    posts : IPostModel[],
    isLoaded : boolean
}
const  postsInitState : PostSliceType = {
    posts : [],
    isLoaded : false
}

export const postSlice = createSlice({
    name : "postSlice",
    initialState: postsInitState,
    reducers : {
        isLoaded : (state)=>{
            state.isLoaded = true
        }
    },
    extraReducers : (builder)=>
        builder
            .addCase(loadPosts.fulfilled, (state,action)=>{
                state.posts = action.payload;
                state.isLoaded = true;
            })
            .addCase(loadPosts.rejected,(state)=>{
                state.isLoaded = false
            })
            .addMatcher(isFulfilled(loadPosts), (state)=>{
                state.isLoaded = true
            })
})

export const postsActions = {
    ...postSlice.actions,
    loadPosts
}