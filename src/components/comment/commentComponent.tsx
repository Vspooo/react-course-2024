import React, {FC} from 'react';
import {ICommentModel} from "../../models/commentModel";
import {useNavigate} from "react-router-dom";


interface IProps {
    comment: ICommentModel
}

const CommentComponent: FC<IProps> = ({comment}) => {

    const navigate = useNavigate()
    const handleShowPost = () => {
        navigate(`/comments-post?postId=${comment.postId}`)
    }
    return (
        <div>
            <h1>comment.{comment.id} - postId:{comment.postId}</h1>
            <p>{comment.name}</p>
            <p>{comment.body}</p>
            <p>{comment.email}</p>
            <button onClick={() => {
                handleShowPost()
            }}>show the post
            </button>
        </div>
    );
};

export default CommentComponent;