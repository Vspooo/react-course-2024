import React, {FC} from 'react';
import {ICommentModel} from "../../models/commentModel";


interface IProps {
    comment: ICommentModel
}

const CommentComponent: FC<IProps> = ({comment}) => {
    return (
        <div>
            <h1>comment.{comment.id} - postId:{comment.postId}</h1>
            <p>{comment.name}</p>
            <p>{comment.body}</p>
            <p>{comment.email}</p>
        </div>
    );
};

export default CommentComponent;