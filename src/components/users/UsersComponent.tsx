import React, {useEffect, useState} from 'react';
import {IUserModel} from "../../models/userModel";
import {apiService} from "../../services/api.sercice";
import UserComponent from "./UserComponent";

const UsersComponent = () => {
    const [users, setUsers] = useState<IUserModel[]>([])
    useEffect(() => {
        apiService.getAllUsers().then(value => setUsers(value.data))
    }, []);

    const getPosts = (id:number) =>{
        apiService.getPostsOfUserById(id).then(value => console.log(value.data))
    }
    return (
        <div>
            {users.map(user => <UserComponent key={user.id} user={user} getPosts={getPosts}/>)}
        </div>
    );
};

export default UsersComponent;