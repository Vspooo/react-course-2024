import React, {useEffect, useState} from 'react';
import {IUserModel} from "../../models/basicModels/userModel";
import {apiService} from "../../services/api.service";
import UserComponent from "./UserComponent";
import {IPostModel} from "../../models/basicModels/postModel";
import PostComponent from "../posts/PostComponent";

const UsersComponent = () => {
    const [users, setUsers] = useState<IUserModel[]>([])
    const [posts, setPosts] = useState<IPostModel[]>([])
    useEffect(() => {
        apiService.getAllUsers().then(value => setUsers(value.data))
    }, []);
    return (
        <div>
            {users.map(user => <UserComponent user={user} key={user.id}/>)}
            {posts.map(post => <PostComponent post={post} key={post.id}/>)}
        </div>
    );
};

export default UsersComponent;