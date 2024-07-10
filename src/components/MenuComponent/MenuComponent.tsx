import React from 'react';
import {Link} from "react-router-dom";

const MenuComponent = () => {
    return (
        <div>
            <li><Link to={""}> all users </Link></li>
            <li><Link to={"posts"}> all posts </Link></li>
            <li><Link to={"comments"}> all comments </Link></li>
        </div>
    );
};

export default MenuComponent;