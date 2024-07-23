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
            <h1>post.{post.id} userId:{post.userId}</h1>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <button onClick={() => {
                handleShowComments()
            }}> show comments
            </button>
        </div>
    );
};

export default PostComponent;