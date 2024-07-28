import React from 'react';
import {useForm} from "react-hook-form";
import {ITokenObtainPairModel} from "../../models/TokenObtainPairModel";
import {authApiService} from "../../services/auth.api.service";
import {useNavigate} from "react-router-dom";

const AuthComponent = () => {
    let {handleSubmit, register} = useForm<ITokenObtainPairModel>({
        defaultValues: {
            username: "Vspooo",
            password: "Abc1234?"
        }
    })

    const navigate = useNavigate()
    const authenticate = async (data: ITokenObtainPairModel) => {
        await authApiService.auth(data)
        navigate("/me")
    }
    return (
        <div>
            <form onSubmit={handleSubmit(authenticate)}>
                <input type={"text"} placeholder={"username"} {...register("username")}/>
                <input type={"text"} placeholder={"password"} {...register("password")}/>
                <button>login</button>
            </form>
        </div>
    );
};

export default AuthComponent;