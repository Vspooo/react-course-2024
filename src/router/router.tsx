import {createBrowserRouter} from "react-router-dom";
import CommentPage from "../pages/CommentPage";
import CommentsPage from "../pages/CommentsPage";
import PostPage from "../pages/PostPage";
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
        {path : "posts/:id", element : <PostPage/>},
        {path : "comments", element : <CommentsPage/>},
        {path : "comments/id", element : <CommentPage/>},
    ]
}]);