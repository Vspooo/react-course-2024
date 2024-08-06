import React, {FC} from 'react';
import {IUserModel} from "../../models/userModel";
import UserComponent from "./UserComponent";

interface IProps {
    users : IUserModel[]
}
const UsersComponent:FC<IProps> = ({users}) => {
    return (
        <div>
            {users.map(user => <UserComponent key={user.id} user={user}/>)}
        </div>
    );
};

export default UsersComponent;