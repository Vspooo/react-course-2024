import React, {FC} from 'react';
import {IPostModel} from "../../models/basicModels/postModel";


interface IProps {
    post : IPostModel
}
const PostComponent:FC<IProps> = ({post}) => {
    return (
        <div>
            <h2>user id : {post.userId}</h2>
            <h3>{post.id} : {post.title}</h3>
            <p>{post.body}</p>
            <hr/>
        </div>
    );
};

export default PostComponent;