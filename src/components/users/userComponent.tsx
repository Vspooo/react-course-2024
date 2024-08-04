import React, {FC} from 'react';
import {IUserModel} from "../../models/userModel";
interface IProps {
    user : IUserModel
}
const UserComponent:FC<IProps> = ({user}) => {
    return (
        <div>
            <h3>{user.id} : {user.name} {user.username}</h3>
            <p>{user.email}</p>
            <hr/>
        </div>
    );
};

export default UserComponent;