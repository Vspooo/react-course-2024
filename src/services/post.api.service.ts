import {IPostModel} from "../models/postModel";
import {axiosInstance} from "./apiService";
import {urls} from "../constants/urls";

const postApiService = {
    getAllPosts : async ():Promise<IPostModel[]> => {
        let posts = await axiosInstance.get<IPostModel[]>(urls.posts)
        return posts.data
    },
    getPostsById : async (id:number):Promise<IPostModel[]> =>{
        let post = await axiosInstance.get<IPostModel[]>(urls.postByUserId + id)
        return post.data
    }
}
export { postApiService}