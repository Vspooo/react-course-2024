import {axiosInstance} from "./apiService";
import {urls} from "../urls/urls";
import {ICarPaginatedModel} from "../models/CarPaginatedModel";

const carApiService ={
    getAllCars : async () : Promise<ICarPaginatedModel> => {
        const accessToken = localStorage.getItem("access")
        const response = await axiosInstance.get<ICarPaginatedModel>(
            urls.cars,
            {
                headers:{
                    Authorization:`Bearer ${accessToken}`
                }
            }
        )
        return response.data
    }
}

export {
    carApiService
}