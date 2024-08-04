import {axiosInstance} from "./apiService";
import {urls} from "../constants/constants";
import {IPostModel} from "../models/postModel";

const postsApiService = {
    getPosts : async () =>{
        const response = await axiosInstance.get<IPostModel[]>(urls.posts)
        return response.data
    }
}

export {
    postsApiService
}