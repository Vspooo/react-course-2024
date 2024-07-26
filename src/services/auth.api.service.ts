import {axiosInstance} from "./apiService";
import {ITokenObtainPairModel} from "../models/TokenObtainPairModel";
import {urls} from "../urls/urls";
import {ITokenRefresh} from "../models/TokenRefresh";

const authApiService = {
auth : async (data:ITokenObtainPairModel) : Promise<ITokenRefresh> =>{
   const response = await axiosInstance.post<ITokenRefresh>(urls.auth,data)
   const {access,refresh} = response.data
    console.log("login success")
   localStorage.setItem("access", access)
   localStorage.setItem("refresh",refresh)
    return response.data
}
}
export{
    authApiService
}