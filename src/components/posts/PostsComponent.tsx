import React, {useEffect, useState} from 'react';
import {IPostModel} from "../../models/basicModels/postModel";
import {apiService} from "../../services/api.service";
import PostComponent from "./PostComponent";

const PostsComponent = () => {
    const [posts, setPosts] = useState<IPostModel[]>([])
    useEffect(() => {
        apiService.getAllPosts().then(value => setPosts(value.data))
    }, []);
    return (
        <div>
            {posts.map(post => <PostComponent post={post} key={post.id}/>)}
        </div>
    );
};

export default PostsComponent;