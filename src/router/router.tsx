import {createBrowserRouter} from "react-router-dom";
import MainLayOut from "../layOuts/MainLayOut";
import UsersPage from "../pages/UsersPage";
import PostsPage from "../pages/PostsPage";
import CommentsPage from "../pages/CommentsPage";
import PostPage from "../pages/PostPage";
import CommentPage from "../pages/CommentPage";

let router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayOut/>,
        children:[
            {index:true, element: <UsersPage/>},
            {path:"users", element: <UsersPage/>},
            {path:"posts", element: <PostsPage/>},
            {path : "posts/:id", element: <PostPage/>},
            {path:"comments", element: <CommentsPage/>},
            {path:"comments/:id", element: <CommentPage/>}
        ]}
])

export {
    router
}