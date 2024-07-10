import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import UsersPage from "../pages/UsersPage";
import PostsPage from "../pages/PostsPage";
import CommentsPage from "../pages/CommentsPage";

const router = createBrowserRouter([
    {
        path:"/",
        element: <MainLayout/>,
        children:[
            {index:true, element: <UsersPage/>},
            {path:"posts", element: <PostsPage/>},
            {path: "comments", element: <CommentsPage/>}

        ]

    }
]);

export {
    router
}