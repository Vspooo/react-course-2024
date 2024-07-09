import axios, {AxiosResponse} from "axios";

import {IPostModel} from "../models/PostModel";
import {urls} from "../urls/constants";


type IRes<T> = Promise<AxiosResponse<T>>
const axiosInstance = axios.create({baseURL:urls.baseURL});

const apiService = {
    savePost : (post:IPostModel) => axiosInstance.post(urls.posts, post)
}

export {
    apiService
}