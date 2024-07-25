import {IUserResponseModel} from "../models/userResponseModel";
import {axiosInstance} from "./apiService";
import {urls} from "../urls/urls";

const userApiService = {
    getUserInfo: async (): Promise<IUserResponseModel> =>{
     const accessToken = localStorage.getItem("access")
     const response = await axiosInstance.get<IUserResponseModel>(
         urls.user,
         {
             headers:{
                 Authorization:`Bearer ${accessToken}`
             }
         })
        return response.data
    }
}

export {
    userApiService
}