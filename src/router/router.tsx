import {createBrowserRouter} from "react-router-dom";
import MainLayOut from "../layOuts/MainLayOut";
import UsersPage from "../pages/UsersPage";
import PostsPage from "../pages/PostsPage";
import CommentsPage from "../pages/CommentsPage";

let router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayOut/>,
        children:[
            {index:true, element: <UsersPage/>},
            {path:"users", element: <UsersPage/>, children:[
                    {path:"postsOfUser", element: <PostsPage/>, children:[
                            {path:"commentsOfPost", element: <CommentsPage/>}
                        ]}
                ]},
            {path:"posts", element: <PostsPage/>},
            {path:"comments", element: <CommentsPage/>}
        ]
    }
])

export {
    router
}