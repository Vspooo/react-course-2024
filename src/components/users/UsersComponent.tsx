import React, {useEffect, useState} from 'react';
import {IUserModel} from "../../models/userModel";
import {apiService} from "../../services/api.service";
import UserComponent from "./UserComponent";

const UsersComponent = () => {
    const [users, setUsers] = useState<IUserModel[]>([])
    useEffect(() => {
        apiService.getAllUsers().then(value => setUsers(value.data))
    }, []);

    return (
        <div>
            {users.map(user => <UserComponent key={user.id} user={user}/>)}
        </div>
    );
};

export default UsersComponent;