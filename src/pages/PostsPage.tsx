import React, {useEffect} from 'react';
import PostsComponent from "../components/posts/PostsComponent";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {postAction} from "../redux/slices/postSlice";

const PostsPage = () => {
    const dispatch = useAppDispatch()
    const {posts} = useAppSelector(state => state.postStore)
    useEffect(() => {
        dispatch(postAction.loadPosts())
    }, []);
    return (
        <div>
            <PostsComponent posts={posts}/>
        </div>
    );
};

export default PostsPage;