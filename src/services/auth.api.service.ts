import {axiosInstance, ResponseType} from "./apiService";
import {ITokenObtainPairModel} from "../models/TokenObtainPairModel";
import {urls} from "../urls/urls";
import {ITokenRefresh} from "../models/TokenRefresh";

const authApiService = {
auth : async (data:ITokenObtainPairModel) : Promise<void> =>{
   const response = await axiosInstance.post<ITokenRefresh>(urls.auth,data)
    return console.log(response.data)
}
}
export{
    authApiService
}