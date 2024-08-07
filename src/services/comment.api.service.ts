import {ICommentModel} from "../models/commentModel";
import {axiosInstance} from "./apiService";
import {urls} from "../constants/urls";

const commentApiService = {
    getCommentsById : async (id:number):Promise<ICommentModel[]> =>{
        let response = await axiosInstance.get(urls.commentsById+id)
        return response.data
    },
    getAllComments : async ():Promise<ICommentModel[]> => {
        let response = await axiosInstance.get(urls.comments)
        return response.data
    }
}

export { commentApiService}