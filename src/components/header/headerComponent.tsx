import React from 'react';
import {NavLink} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
            <ul>
                <li><NavLink to={"/"}>sign in</NavLink></li>
                <li><NavLink to={"/registration"}>sign up</NavLink></li>
                <li><NavLink to={"/me"}>me</NavLink></li>
            </ul>
            <hr/>
        </div>
    );
};

export default HeaderComponent;