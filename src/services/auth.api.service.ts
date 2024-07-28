import {axiosInstance} from "./apiService";
import {ITokenObtainPairModel} from "../models/TokenObtainPairModel";
import {urls} from "../urls/urls";
import {ITokenRefresh} from "../models/TokenRefresh";
import {retriveLocalStorageData} from "../helpers/helpers";

const authApiService = {
auth : async (data:ITokenObtainPairModel) : Promise<void> =>{
  const response = await axiosInstance.post(urls.auth,data)
    localStorage.setItem("tokenPair", JSON.stringify(response.data))
    console.log("old tokens: " + response.data)
},
refresh : async():Promise<void> => {
   const tokenRefresh = retriveLocalStorageData<ITokenRefresh>("tokenPair").refresh
   const response = await axiosInstance.post(urls.refresh,{refresh:tokenRefresh})
    localStorage.setItem("tokenPair",JSON.stringify(response.data))
}


}
export{
    authApiService
}