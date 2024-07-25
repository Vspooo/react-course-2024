import React, {useEffect, useState} from 'react';
import {IUserModel} from "../../models/userModel";
import UserComponent from "./UserComponent";
import {userApiService} from "../../services/user.api.service";

const UsersComponent = () => {
    const [users, setUsers] = useState<IUserModel[]>([])
    useEffect(() => {
        userApiService.getAllUsers().then(value => setUsers(value.data))
    }, []);

    return (
        <div>
            {users.map(user => <UserComponent key={user.id} user={user}/>)}
        </div>
    );
};

export default UsersComponent;