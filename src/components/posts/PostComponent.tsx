import React, {FC} from 'react';
import {IPostModel} from "../../models/postModel";
import {useNavigate} from "react-router-dom";


interface IProps {
    post: IPostModel
}

const PostComponent: FC<IProps> = ({post}) => {
    const navigate = useNavigate()
    const handleShowComments = () => {
        navigate(`/post-comments?postId=${post.id}`)
    }
    return (
        <div>
            <h1> post : {post.id}. User id : {post.userId}</h1>
            <p>{post.title}</p>
            <p>{post.body}</p>
            <button onClick={() => {
                handleShowComments()
            }}> show comments
            </button>
        </div>


    );
};

export default PostComponent;