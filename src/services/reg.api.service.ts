import {IUserModel} from "../models/userModel";
import {axiosInstance} from "./apiService";
import {IUserResponseModel} from "../models/userResponseModel";
import {urls} from "../urls/urls";


const regApiService = {
  register : async (data:IUserModel) => {
     const response =  await axiosInstance.post<IUserResponseModel>(urls.register,data)
     return response.data
  }
}
export {
    regApiService
}