import axios, {AxiosResponse} from "axios";
import {urls} from "../constants/urls";
import {IUserModel} from "../models/basicModels/userModel";
import {IPostModel} from "../models/basicModels/postModel";
import {ICommentModel} from "../models/basicModels/commentModel";

const axiosInstance = axios.create({
    baseURL: urls.baseURL
});

type IRes<T> = Promise<AxiosResponse<T>>

const apiService = {
    getAllUsers : ():IRes<IUserModel[]> => axiosInstance.get(urls.users),
    getAllPosts : ():IRes<IPostModel[]> => axiosInstance.get(urls.posts),
    getAllComments : ():IRes<ICommentModel[]> => axiosInstance.get(urls.comments)
}

export {
    apiService
}