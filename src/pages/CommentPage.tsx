import React, {useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";
import {ICommentModel} from "../models/commentModel";
import {apiService} from "../services/api.sercice";
import CommentComponent from "../components/comment/commentComponent";

const PostCommentsPage = () => {
    const [searchParams] = useSearchParams()
    const postId = searchParams.get("postId")
    const [comments, setComments] = useState<ICommentModel[]>([])
    useEffect(() => {
        if (postId != null) {
            apiService.getCommentsOfPostById(parseInt(postId)).then(value => setComments(value.data))
        } else {
            console.log("wrong id for comments")
        }
    }, [postId]);
    return (
        <div>
            {comments.map(comment => <CommentComponent comment={comment} key={comment.id}/>)}
        </div>
    );
};

export default PostCommentsPage;