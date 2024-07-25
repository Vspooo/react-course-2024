import React, {useEffect, useState} from 'react';
import {IUserResponseModel} from "../../models/userResponseModel";
import {ICarPaginatedModel} from "../../models/CarPaginatedModel";
import {userApiService} from "../../services/user.api.service";
import {carApiService} from "../../services/car.api.service";
import {ICarWithAuthModel} from "../../models/carWithAuthModel";
import CarsComponent from "../cars/carsComponent";

interface IProps {
    user: IUserResponseModel,
    car: ICarPaginatedModel
}

const UserComponent = () => {
    const [user, setUser] = useState<IUserResponseModel | null>(null)
    const [cars, setCars] = useState<ICarWithAuthModel[]>([])
    const [hasError, setHasError] = useState<boolean>(false)
    useEffect(() => {
            userApiService.getUserInfo().then(value => setUser(value))
            carApiService.getAllCars().then(value => setCars(value.items))

    }, []);
    return (
        <div>
            <div><p>user id: {user?.id}</p>
                <p>username -{user?.username}</p>
                <p>active status: {user?.is_active}</p>
                <p>is staff? : {user?.is_staff}</p>
                <p>is super user? :{user?.is_superuser}</p>
                <p>last login : {user?.last_login}</p>
                <p>created : {user?.created}</p>
                <p>last update :{user?.updated}</p>
            </div>
            <hr/>
            <div>
                {user?.username}'s cars:
                <CarsComponent/>
            </div>
        </div>
    );
};

export default UserComponent;