import React from 'react';
import {useForm} from "react-hook-form";
import {IUserModel} from "../../models/userModel";
import {regApiService} from "../../services/reg.api.service";

const RegFormComponent = () => {
  const {handleSubmit,register}  =  useForm<IUserModel>()
    const registration = (data:IUserModel) =>{
      regApiService.register(data)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(registration)}>
                <input type={"text"} placeholder={"username"} {...register("username")}/>
                <input type={"text"} placeholder={"password"} {...register("password")}/>
                <button>register</button>
            </form>
        </div>
    );
};

export default RegFormComponent;