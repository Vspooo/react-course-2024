import React, {FC} from 'react';
import {IUserModel} from "../../models/userModel";
import {useNavigate} from "react-router-dom";
export interface IProps {
    user : IUserModel
}
const UserComponent:FC<IProps> = ({user}) => {
  const navigate =  useNavigate()
    const handleNavigate  = () =>{
      navigate(`/posts/${user.id}`)
    }
    return (
        <div>
            <h3>{user.id} : {user.name} or {user.username}</h3>
            <p>contact : {user.email}</p>
            <button onClick={()=> {handleNavigate()}}> show user`s posts</button>
            <hr/>
        </div>
    );
};

export default UserComponent;