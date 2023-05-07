import React from 'react';
import {INewDelivery} from "../../common/models/INewDelivery";
interface DeliveryAddingProps{
    newDelivery: INewDelivery
}

const DeliveryAddinng:React.FC<DeliveryAddingProps> = ({newDelivery}) => {
    return (
        <div>
            <label>Geschäft</label>
            <select>z.B. Billa</select>

            <label>Geschäft</label>
            <select>z.B. Billa</select>

            <label>Geschäft</label>
            <select>z.B. Billa</select>

            <button name={"postButton"}>Posten</button>
        </div>
    );
};

export default DeliveryAddinng;