import React from 'react';
import MenuComponent from "../components/menuComponent/MenuComponent";
import {Outlet} from "react-router-dom";

const MainLayOut = () => {
    return (
        <div>
           <MenuComponent/>
            <Outlet/>
        </div>
    );
};

export default MainLayOut;