import {IUserModel} from "../models/userModel";
import {urls} from "../constants/urls";
import {axiosInstance, ResT} from "./api.service";

const userApiService = {
    getAllUsers : () :ResT<IUserModel[]> => axiosInstance.get(urls.users),
}

export {
    userApiService
}