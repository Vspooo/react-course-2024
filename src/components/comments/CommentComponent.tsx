import React, {FC} from 'react';
import {ICommentModel} from "../../models/commentModel";
interface IProps {
    comment : ICommentModel
}
const CommentComponent:FC<IProps> = ({comment}) => {
    return (
        <div>
            <h3>postId : {comment.postId}. commentId:{comment.id} - {comment.name}</h3>
            <p> {comment.body}</p>
            <p> contacts : {comment.email}</p>
            <hr/>
        </div>
    );
};

export default CommentComponent;