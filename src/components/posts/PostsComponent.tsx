import React, {useEffect, useState} from 'react';
import {IPostModel} from "../../models/postModel";
import PostComponent from "./PostComponent";
import {postApiService} from "../../services/post.api.service";


const PostsComponent = () => {
    const [posts, setPosts] = useState<IPostModel[]>([])
    useEffect(() => {
        postApiService.getAllPost().then(value => setPosts(value.data))
    }, []);
    return (
        <div>
            {posts.map(post => <PostComponent post={post} key={post.id}/>)}
        </div>
    );
};

export default PostsComponent;