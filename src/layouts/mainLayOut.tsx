import React from 'react';
import {Outlet} from "react-router-dom";
import HeaderComponent from "../components/header/headerComponent";
import FooterComponent from "../components/footer/footerComponent";

const MainLayOut = () => {
    return (
        <div>
            <HeaderComponent/>
            <Outlet/>
            <FooterComponent/>
        </div>
    );
};

export default MainLayOut;