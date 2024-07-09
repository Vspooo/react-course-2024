
import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {IPostModel} from "../models/PostModel";
import {apiService} from "../services/api.service";
import {joiResolver} from "@hookform/resolvers/joi";
import userValidator from "../validators/userValidator";

const FormComponent = () => {

    const save: SubmitHandler<IPostModel> = async (data:IPostModel) => {
        const response = await apiService.savePost(data)
        console.log("success: ", response.data)
    }

    let { formState:
        {errors,isValid},
        register,
        handleSubmit
    } = useForm<IPostModel>({
        mode:"all",
        resolver: joiResolver(userValidator)
    });

    return (
        <div>
            {errors.title && <div>{errors.title.message}</div>}
            <form onSubmit={handleSubmit(save)}>
                <input type={"text"} {...register("title")} placeholder={"title"}/>
                <input type={"text"} {...register("body")} placeholder={"body"}/>
                <button disabled={!isValid}>send</button>
            </form>
        </div>
    );
};

export default FormComponent;