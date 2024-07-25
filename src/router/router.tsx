import {createBrowserRouter} from "react-router-dom";
import MainLayOut from "../layouts/mainLayOut";
import React from "react";
import AuthPage from "../pages/authorisationPage";
import RegistrationPage from "../pages/registrationPage";
import UserPage from "../pages/userPage";
export const router = createBrowserRouter([
    {
        path : "/", element:<MainLayOut/>, children: [
            {
                index:true, element:<AuthPage/>
            },
            {
                path:"/registration", element: <RegistrationPage/>
            },
            {
                path:"/me", element: <UserPage/>
            }
        ]
    }
])

