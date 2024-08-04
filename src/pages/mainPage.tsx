import React from 'react';
import UsersComponent from "../components/users/usersComponent";
import PostsComponent from "../components/posts/PostsComponent";

const MainPage = () => {
    return (
        <div>
            <h1>Users : </h1>
            <UsersComponent/>
            <h1>Posts : </h1>
            <PostsComponent/>
        </div>
    );
};

export default MainPage;