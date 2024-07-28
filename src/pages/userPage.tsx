import React, {useEffect, useState} from 'react';
import UserComponent from "../components/user/userComponent";
import {IUserResponseModel} from "../models/userResponseModel";
import {ICarWithAuthModel} from "../models/carWithAuthModel";
import {userApiService} from "../services/user.api.service";
import {carApiService} from "../services/car.api.service";
import {AxiosError} from "axios";
import {authApiService} from "../services/auth.api.service";
import {useNavigate} from "react-router-dom";


const UserPage = () => {

    const navigate = useNavigate()

    const [user, setUser] = useState<IUserResponseModel>({
        id: 0,
        username: "not entered",
        is_active: false,
        is_staff: false,
        is_superuser: false,
        last_login: "dont exist",
        created: "dont exist",
        updated: "dont exist"
    })
    const [cars, setCars] = useState<ICarWithAuthModel[]>([])
    useEffect(() => {
        const getUserInfo = async () => {
            try {
                await userApiService.getUserInfo().then(value => setUser(value))
                await carApiService.getAllCars().then(value => setCars(value.items))
            } catch (e) {
                const axiosError = e as AxiosError
                if (axiosError?.response?.status === 401) {
                    try {
                        await authApiService.refresh()
                        await userApiService.getUserInfo().then(value => setUser(value))
                        await carApiService.getAllCars().then(value => setCars(value.items))
                    } catch (e) {
                        navigate("/")
                    }

                }


            }
        }

        getUserInfo()
    }, []);
    return (
        <div>
            <UserComponent user={user} car={cars}/>
        </div>
    );
};

export default UserPage;