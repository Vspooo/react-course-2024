import React, {FC} from 'react';
import {ICarWithAuthModel} from "../../models/carWithAuthModel";

interface IProps {
    car: ICarWithAuthModel
}
const CarComponent:FC<IProps> = ({car}) => {
    return (
        <div>
            <p>car id :{car.id}</p>
            <p>car brand :{car.brand}</p>
            <p>car year :{car.year}</p>
            <p>car price :{car.price}</p>
            <img src={`${car.photo}`} alt={"your car's photo"}/>
            <hr/>
        </div>
    );
};

export default CarComponent;