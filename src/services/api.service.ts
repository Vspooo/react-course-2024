import axios, {AxiosResponse} from "axios";
import {urls} from "../constants/urls";
export const axiosInstance = axios.create({baseURL:urls.baseURL});
export type ResT<T> = Promise<AxiosResponse<T>>
