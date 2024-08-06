import {IUserModel} from "../models/userModel";
import {axiosInstance} from "./apiService";
import {urls} from "../constants/urls";

const userApiService = {
    getAllUsers : async (): Promise<IUserModel[]> => {
     let response = await axiosInstance.get(urls.users)
        return response.data
    },
    getUserById : async (id:number):Promise<IUserModel> => {
        let response = await axiosInstance.get(urls.userByPostId + id)
        return response.data
    }
}

export { userApiService }