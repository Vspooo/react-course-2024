import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {commentAction} from "../redux/slices/commentSlice";
import CommentsComponent from "../components/comments/CommentsComponent";

const CommentsOfPostPage = () => {
    const {id} = useParams()
    const dispatch = useAppDispatch()
   const {comments} = useAppSelector(state => state.commentStore)
    useEffect(() => {
        if (id) dispatch(commentAction.loadCommentsOfUser(+id))
    }, []);
    return (
        <div>
            <CommentsComponent comments={comments}/>
        </div>
    );
};

export default CommentsOfPostPage;