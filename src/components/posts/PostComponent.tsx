import React, {FC} from 'react';
import {IPostModel} from "../../models/postModel";
import {commentApiService} from "../../services/comment.api.service";
import {useNavigate} from "react-router-dom";
interface IProps {
    post : IPostModel
}
const PostComponent:FC<IProps> = ({post}) => {
   const navigate = useNavigate()
    const handleShowComments = (id:number) =>{
        commentApiService.getCommentsById(id)
        navigate(`/comments/${id}`)
    }
    return (
        <div>
            <h3>user id : {post.userId}. post id:{post.id}- {post.title}</h3>
            <p>{post.body}</p>
            <button onClick={()=>{handleShowComments(post.id)}}>show comments</button>
            <hr/>
        </div>
    );
};

export default PostComponent;