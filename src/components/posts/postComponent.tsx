import React, {FC} from 'react';
import {IPostModel} from "../../models/postModel";

interface IProps {
    post : IPostModel
}
const PostComponent:FC<IProps> = ({post}) => {
    return (
        <div>
            <h3>user id : {post.userId}. {post.id} : {post.title}</h3>
            <p>{post.body}</p>
            <hr/>
        </div>
    );
};

export default PostComponent;