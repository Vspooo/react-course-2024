import {IUserResponseModel} from "../models/userResponseModel";
import {axiosInstance} from "./apiService";
import {urls} from "../urls/urls";

const userApiService = {
    getUserInfo: async (): Promise<IUserResponseModel> => {
        const response = await axiosInstance.get<IUserResponseModel>(urls.user)
        return response.data
    }
}

export {
    userApiService
}