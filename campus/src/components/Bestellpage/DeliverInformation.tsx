import React from 'react';
import {IDelivery} from "../../common/models/IDelivery";

interface DeliveryProps {
    delivery:IDelivery
}

const DeliverInformation: React.FC<DeliveryProps>  = ({delivery}) => {
    return (

    //Delivery person
    // Location
    // Time
    // pick-up time
        <tr>
            <td>Deliver</td>
        </tr>
    );
};

export default DeliverInformation;