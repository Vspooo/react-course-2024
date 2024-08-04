import {createBrowserRouter} from "react-router-dom";
import MainLayOut from "../layouts/mainLayOut";
import MainPage from "../pages/mainPage";

export const router =  createBrowserRouter([
    {
        path: "/", element: <MainLayOut/> , children:[
            {
                index: true, element : <MainPage/>
            }
        ]
    }
])