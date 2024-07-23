import React, {FC} from 'react';
import {IPostModel} from "../../models/postModel";

interface IProps {
    post: IPostModel
}

const SinglePostComponent: FC<IProps> = ({post}) => {
    return (
        <div>
            <h1>post id:{post.id}. user id - {post.userId}</h1>
            <p>{post.title}</p>
            <p>{post.body}</p>
        </div>
    );
};

export default SinglePostComponent;