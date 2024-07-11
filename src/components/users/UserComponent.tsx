import React, {FC} from 'react';
import {IUserModel} from "../../models/userModel";


interface IProps {
    user : IUserModel,
    getPosts : (id:number) => void
}
const UserComponent:FC<IProps> = ({user,getPosts}) => {
    return (
        <div>
            <h3>{user.id} : {user.name} {user.username}</h3>
            <p>{user.email} or {user.phone}</p>
            <p>address:{user.address.city} {user.address.street} {user.address.suite} {user.address.zipcode} or {user.address.geo.lat} {user.address.geo.lng}</p>
            <p>company : {user.website}. {user.company.name} : "{user.company.catchPhrase}" - {user.company.bs}</p>
            <button onClick={()=>{
                getPosts(user.id)
            }}>show posts</button>

        </div>
    );
};

export default UserComponent;