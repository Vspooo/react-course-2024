import React from 'react';
import {useForm} from "react-hook-form";
import {IUserModel} from "../../models/userModel";
import {regApiService} from "../../services/reg.api.service";
import {authApiService} from "../../services/auth.api.service";
import {useNavigate} from "react-router-dom";

const RegFormComponent = () => {
  const {handleSubmit,register}  =  useForm<IUserModel>()
    const navigate = useNavigate()
    const registration = async (data:IUserModel) =>{
      try {
          await regApiService.register(data)
          await authApiService.auth({username:data.username, password:data.password})
          navigate("/me")
      } catch (e){
          console.log(e)
      }

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