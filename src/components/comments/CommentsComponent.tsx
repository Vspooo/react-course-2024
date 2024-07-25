import React, {useEffect, useState} from 'react';
import {ICommentModel} from "../../models/commentModel";
import CommentComponent from "./CommentComponent";
import {commentApiService} from "../../services/comment.api.service";


const CommentsComponent = () => {
    const [comments, setComments] = useState<ICommentModel[]>([])
    useEffect(() => {
        commentApiService.getAllComments().then(value => setComments(value.data))
    }, []);


    return (
        <div>
            {comments.map(comment => <CommentComponent comment={comment} key={comment.id}/>)}
        </div>
    );
};

export default CommentsComponent;