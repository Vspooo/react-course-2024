import {axiosInstance} from "./apiService";
import {urls} from "../urls/urls";
import {ICarPaginatedModel} from "../models/CarPaginatedModel";

const carApiService ={
    getAllCars : async () : Promise<ICarPaginatedModel> => {
        const response = await axiosInstance.get<ICarPaginatedModel>(urls.cars,)
        return response.data
    }
}

export {
    carApiService
}