import React, {useEffect} from 'react';
import UsersComponent from "../components/users/UsersComponent";
import {useDispatch} from "react-redux";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {userAction} from "../redux/slices/userSlice";

const UsersPage = () => {
    const dispatch = useAppDispatch()
    const  {users} =useAppSelector(state => state.userStore)
    useEffect(() => {
        dispatch(userAction.loadUsers())
    }, []);
    return (
        <div>
            <UsersComponent users={users}/>
        </div>
    );
};

export default UsersPage;