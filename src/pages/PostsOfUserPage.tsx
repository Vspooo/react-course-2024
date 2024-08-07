import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {postAction} from "../redux/slices/postSlice";
import PostsComponent from "../components/posts/PostsComponent";


const PostsOfUserPage = () => {
    let {id} = useParams()
    const dispatch = useAppDispatch()
    const {posts}  =  useAppSelector(state => state.postStore)
    useEffect(() => {
        if (id) dispatch(postAction.loadPostsOfUser(+id))
    }, []);
    return (
        <div>
            <PostsComponent posts={posts}/>
        </div>
    );
};

export default PostsOfUserPage;