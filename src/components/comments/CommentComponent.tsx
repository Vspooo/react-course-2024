import React, {FC} from 'react';
import {ICommentModel} from "../../models/basicModels/commentModel";


interface IProps {
    comment: ICommentModel
}

const CommentComponent: FC<IProps> = ({comment}) => {
    return (
        <div>
            <h3>post id : {comment.postId}</h3>
            <h4>com id {comment.id} : {comment.name}</h4>
            <p>{comment.body}</p>
            <p>{comment.email}</p>
            <hr/>
        </div>
    );
};

export default CommentComponent;