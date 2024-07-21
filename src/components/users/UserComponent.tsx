import React, {FC} from 'react';
import {IUserModel} from "../../models/userModel";
import {useNavigate} from "react-router-dom";


interface IProps {
    user: IUserModel,
}

const UserComponent: FC<IProps> = ({user}) => {
    const navigate = useNavigate()
    const handleShowPosts = () => {
        navigate(`/posts/${user.id}`)

    }
    return (
        <div>
            <h3>{user.id} : {user.name} {user.username}</h3>
            <p>{user.email} or {user.phone}</p>
            <p>address:{user.address.city} {user.address.street} {user.address.suite} {user.address.zipcode} or {user.address.geo.lat} {user.address.geo.lng}</p>
            <p>company : {user.website}. {user.company.name} : "{user.company.catchPhrase}" - {user.company.bs}</p>

            <button onClick={() => {
                handleShowPosts()
            }}>show posts
            </button>

        </div>
    );
};

export default UserComponent;