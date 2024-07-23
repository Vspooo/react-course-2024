import {urls} from "../constants/urls";
import {axiosInstance, ResT} from "./api.service";
import {ICommentModel} from "../models/commentModel";

const commentApiService = {
    getAllComments : () :ResT<ICommentModel[]> => axiosInstance.get(urls.comments),
    getCommentsOfPostById : (id:number) :ResT<ICommentModel[]> => axiosInstance.get(urls.commentsOfPostById + id),
}

export {
    commentApiService
}