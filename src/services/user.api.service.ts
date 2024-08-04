import {IUserModel} from "../models/userModel";
import {axiosInstance} from "./apiService";
import {urls} from "../constants/constants";

const userApiService = {
    getUsers : async() => {
      const response =  await axiosInstance.get<IUserModel[]>(urls.users)
      return response.data
    }

}

export {
    userApiService
}