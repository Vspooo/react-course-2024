import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/store";
import UserComponent from "./userComponent";
import {usersActions} from "../../redux/slices/userSlice";

const UsersComponent = () => {
    const {userSlice:{users,isLoaded}} =  useAppSelector(state => state)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(usersActions.loadUsers())
    }, []);
    return (
        <div>
            {!isLoaded && <div>Loading users in process...</div>}
            {users.map(user => <UserComponent key={user.id} user={user}/>)}
        </div>
    );
};

export default UsersComponent;