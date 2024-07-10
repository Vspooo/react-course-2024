import {Link, Outlet} from "react-router-dom";
import MenuComponent from "../components/MenuComponent/MenuComponent";

const MainLayout = () => {
    return (
        <div>
            <MenuComponent/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;