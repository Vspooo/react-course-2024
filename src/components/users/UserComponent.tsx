import React, {FC} from 'react';
import {IUserModel} from "../../models/basicModels/userModel";


interface IProps {
    user:IUserModel
}
const UserComponent:FC<IProps> = ({user}) => {
    return (
        <div>
            <h3>{user.id} : {user.name} {user.username}</h3>
            <h5>{user.email}</h5>
        </div>
    );
};

export default UserComponent;