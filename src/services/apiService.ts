import axios, {AxiosResponse} from "axios";
import {urls} from "../urls/urls";
import {retriveLocalStorageData} from "../helpers/helpers";
import {ITokenRefresh} from "../models/TokenRefresh";
const axiosInstance = axios.create({baseURL: urls.baseURL})
export type ResponseType<T> = Promise<AxiosResponse<T>>

axiosInstance.interceptors.request.use(requestObject => {
    if (localStorage.getItem("tokenPair") && requestObject.url !== urls.auth && requestObject.url !== urls.refresh){
        requestObject.headers.set("Authorization", "Bearer "+ retriveLocalStorageData<ITokenRefresh>("tokenPair").access)
    }
    return requestObject
})

export {
    axiosInstance
}