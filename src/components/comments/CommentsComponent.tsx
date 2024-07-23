import React, {useEffect, useState} from 'react';
import {ICommentModel} from "../../models/commentModel";
import {apiService} from "../../services/api.service";
import CommentComponent from "./CommentComponent";


const CommentsComponent = () => {
    const [comments, setComments] = useState<ICommentModel[]>([])
    useEffect(() => {
        apiService.getAllComments().then(value => setComments(value.data))
    }, []);


    return (
        <div>
            {comments.map(comment => <CommentComponent comment={comment} key={comment.id}/>)}
        </div>
    );
};

export default CommentsComponent;