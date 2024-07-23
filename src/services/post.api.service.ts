import {urls} from "../constants/urls";
import {axiosInstance, ResT} from "./api.service";
import {IPostModel} from "../models/postModel";

const postApiService = {
    getAllPost : (): ResT<IPostModel[]> => axiosInstance.get(urls.posts),
    getPostsOfUserById : (id:number) : ResT<IPostModel[]> => axiosInstance.get(urls.postsOfUserById + id),
    getPostOfComments : (id:number) : ResT<IPostModel[]> => axiosInstance.get(urls.postOfCommentById+id)
}

export{
    postApiService
}