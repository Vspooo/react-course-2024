import React, {FC} from 'react';
import {IPostModel} from "../../models/postModel";
import PostComponent from "./PostComponent";

interface IProps {
    posts : IPostModel[]
}
const PostsComponent:FC<IProps> = ({posts}) => {
    return (
        <div>
            {posts.map(post => <PostComponent key={post.id} post={post}/>)}
        </div>
    );
};

export default PostsComponent;