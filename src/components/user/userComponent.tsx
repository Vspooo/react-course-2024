import React, {FC} from 'react';
import {IUserResponseModel} from "../../models/userResponseModel";
import CarsComponent from "../cars/carsComponent";
import {ICarWithAuthModel} from "../../models/carWithAuthModel";

interface IProps {
    user: IUserResponseModel,
    car: ICarWithAuthModel[]
}

const UserComponent:FC<IProps> = ({user,car}) => {
    return (
        <div>
            <div><p>user id: {user?.id}</p>
                <p>username -{user?.username}</p>
                <p>active status: {user?.is_active + ""}</p>
                <p>is staff? : {user?.is_staff+""}</p>
                <p>is super user? :{user?.is_superuser+""}</p>
                <p>last login : {user?.last_login}</p>
                <p>created : {user?.created}</p>
                <p>last update :{user?.updated}</p>
            </div>
            <hr/>
            <div>
                {user?.username}'s cars:
                <CarsComponent cars={car}/>
            </div>
        </div>
    );
};

export default UserComponent;