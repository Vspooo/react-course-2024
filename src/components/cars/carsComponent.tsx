import React, {useEffect, useState} from 'react';
import {ICarWithAuthModel} from "../../models/carWithAuthModel";
import {carApiService} from "../../services/car.api.service";
import CarComponent from "./carComponent";



const CarsComponent = () => {
    const [cars, setCars] = useState<ICarWithAuthModel[]>([])
    useEffect(() => {
        carApiService.getAllCars().then(value => setCars(value.items))
    }, []);

    return (
        <div>
            {cars.map(car => <CarComponent key={car.id} car={car}/>)}
        </div>
    );
};

export default CarsComponent;