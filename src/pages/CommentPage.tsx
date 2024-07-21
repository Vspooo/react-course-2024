import React, {useEffect, useState} from 'react';
import {Location, useLocation, useParams} from "react-router-dom";
import {ICommentModel} from "../models/commentModel";
import {apiService} from "../services/api.sercice";
import CommentComponent from "../components/comment/commentComponent";

const CommentPage = () => {
    let {id} = useParams<{ id: string }>()
    let location: Location<ICommentModel> = useLocation()
    let state = location.state
    const [comments, setComments] = useState<ICommentModel[]>([])
    useEffect(() => {
        if (id != null) {
            apiService.getCommentsOfPostById(parseInt(id)).then(value => setComments(value.data))
        } else {
            console.log("wrong id for comments")
        }
    }, [id]);
    return (
        <div>
            {comments.map(comment => <CommentComponent comment={comment} key={comment.id}/>)}
        </div>
    );
};

export default CommentPage;