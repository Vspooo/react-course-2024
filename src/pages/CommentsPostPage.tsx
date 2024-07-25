import React, {useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";
import {IPostModel} from "../models/postModel";
import SinglePostComponent from "../components/singlePostComponent/SinglePostComponent";
import {postApiService} from "../services/post.api.service";

const CommentsPostPage = () => {
   const [searchParams]  =useSearchParams()
    const postId = searchParams.get("postId")
    const [post, setPost] = useState<IPostModel[]>([])
    useEffect(() => {
        if (postId != null){
            postApiService.getPostOfComments(parseInt(postId)).then(value => setPost(value.data))
        }
    }, [postId]);
    return (
        <div>
            {post.map(post => <SinglePostComponent  key={post.id} post={post}/>)}
        </div>
    );
};

export default CommentsPostPage;