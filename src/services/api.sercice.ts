import axios, {AxiosResponse} from "axios";
import {urls} from "../constants/urls";
import {IUserModel} from "../models/userModel";
import {IPostModel} from "../models/postModel";
import {ICommentModel} from "../models/commentModel";

const axiosInstance = axios.create({baseURL:urls.baseURL});
type ResT<T> = Promise<AxiosResponse<T>>
const apiService = {
    getAllUsers : () :ResT<IUserModel[]> => axiosInstance.get(urls.users),
    getAllPost : (): ResT<IPostModel[]> => axiosInstance.get(urls.posts),
    getAllComments : () :ResT<ICommentModel[]> => axiosInstance.get(urls.comments),
    getPostsOfUserById : (id:number) : ResT<IPostModel[]> => axiosInstance.get(urls.postsOfUserById + id),
    getCommentsOfPostById : (id:number) :ResT<ICommentModel[]> => axiosInstance.get(urls.commentsOfPostById + id)
}

export {
    apiService
}