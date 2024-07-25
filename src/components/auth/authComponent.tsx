import React from 'react';
import {useForm} from "react-hook-form";
import {ITokenObtainPairModel} from "../../models/TokenObtainPairModel";
import {authApiService} from "../../services/auth.api.service";

const AuthComponent = () => {
  let {handleSubmit,register} =   useForm<ITokenObtainPairModel>({
      defaultValues : {
          username: "Vspooo",
          password: "Abc1234?"
      }
  })

  const authenticate = (data:ITokenObtainPairModel)=>{
      authApiService.auth(data)
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