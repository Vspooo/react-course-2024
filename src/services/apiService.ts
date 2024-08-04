import axios, {AxiosResponse} from "axios";
import {urls} from "../constants/constants";

const axiosInstance = axios.create({baseURL: urls.baseURL});
export type ResponseType<T> = Promise<AxiosResponse<T>>

export {
    axiosInstance
}