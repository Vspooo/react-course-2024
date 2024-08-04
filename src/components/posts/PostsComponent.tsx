import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {postsActions} from "../../redux/slices/postSlice";
import PostComponent from "./postComponent";

const PostsComponent = () => {
   const {postSlice:{posts,isLoaded}} = useAppSelector(state => state)
   const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(postsActions.loadPosts())
    }, []);
    return (
        <div>
            {!isLoaded && <div>Loading posts in progress</div>}
            {posts.map(post => <PostComponent key={post.id} post={post}/>)}
        </div>
    );
};

export default PostsComponent;