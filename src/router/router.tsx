import {createBrowserRouter} from "react-router-dom";
import MainLayOut from "../layOuts/MainLayOut";
import UsersPage from "../pages/UsersPage";
import PostsPage from "../pages/PostsPage";
import CommentsPage from "../pages/CommentsPage";
import UserPostsPage from "../pages/PostPage";
import PostCommentsPage from "../pages/CommentPage";
import CommentsPostPage from "../pages/CommentsPostPage";

let router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayOut/>,
        children:[
            {index:true, element: <UsersPage/>},
            {path:"users", element: <UsersPage/>},
            {path:"posts", element: <PostsPage/>},
            {path:"comments", element: <CommentsPage/>},
            {path : "posts/:id", element: <UserPostsPage/>},
            {path:"post-comments", element: <PostCommentsPage/>},
            {path: "comments-post", element: <CommentsPostPage/>}
        ]}
])

export {
    router
}