import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../redux/store";
import {commentAction} from "../redux/slices/commentSlice";
import CommentsComponent from "../components/comments/CommentsComponent";

const CommentsPage = () => {
    const dispatch = useAppDispatch()
  const {comments} = useAppSelector(state => state.commentStore)
    useEffect(() => {
        dispatch(commentAction.loadComments())
    }, []);
    return (
        <div>
            <CommentsComponent comments={comments}/>
        </div>
    );
};

export default CommentsPage;