import axios, {AxiosResponse} from "axios";
import {urls} from "../urls/urls";
const axiosInstance = axios.create({baseURL: urls.baseURL})
export type ResponseType<T> = Promise<AxiosResponse<T>>
export {
    axiosInstance
}