import React, {useEffect, useState} from 'react';
import PostComponent from "../components/post/postComponent";
import {Location, useLocation, useParams} from "react-router-dom";
import {IPostModel} from "../models/postModel";
import {postApiService} from "../services/post.api.service";

const UserPostsPage = () => {
    let {id} = useParams<{ id: string }>()
    let location: Location<IPostModel> = useLocation()
    let state = location.state
    const [posts, setPosts] = useState<IPostModel[]>([])
    useEffect(() => {
        if (id != null) {
           postApiService.getPostsOfUserById(parseInt(id)).then(value => setPosts(value.data))
        } else {
            console.log("smt wrong")
        }
    }, [id]);
    return (
        <div>
            {posts.map(post => <PostComponent post={post} key={post.id}/>)}
        </div>
    );
};

export default UserPostsPage;