import {createBrowserRouter} from "react-router-dom";
import CommentsOfPostPage from "../pages/CommentsOfPostPage";
import CommentsPage from "../pages/CommentsPage";
import PostsOfUserPage from "../pages/PostsOfUserPage";
import UserPage from "../pages/UserPage";
import React from "react";
import PostsPage from "../pages/PostsPage";
import UsersPage from "../pages/UsersPage";
import MainLayOut from "../layouts/mainLayOut";
import ErrorComponent from "../components/errorComponent/errorComponent";

export const router = createBrowserRouter([{
    path : "/",
    element : <MainLayOut/>,
    errorElement : <ErrorComponent/>,
    children : [
        {index :true, element : <UsersPage/>},
        {path : "users", element : <UsersPage/>},
        {path : "posts", element : <PostsPage/>},
        {path : "users/:id", element : <UserPage/>},
        {path : "posts/:id", element : <PostsOfUserPage/>},
        {path : "comments", element : <CommentsPage/>},
        {path : "comments/:id", element : <CommentsOfPostPage/>},
    ]
}]);