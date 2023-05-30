import React from 'react';
import {IDelivery} from "../../common/models/IDelivery";

interface DeliveryProps {
    delivery: IDelivery

}

const Delivery: React.FC<DeliveryProps> = ({delivery}) => {
    return (
       <tr>
           <td>{delivery.userID}</td>
           <td>{delivery.shop}</td>
       </tr>
    );
};

export default Delivery;