import React from 'react';
import {IDelivery} from "../../common/models/IDelivery";
import { Route, useNavigate } from "react-router-dom";

interface DeliveryProps {
    delivery: IDelivery
}

const Delivery: React.FC<DeliveryProps> = ({delivery}) => {

    const navigate = useNavigate();
    const handleOnCLick = () => {
        navigate('/login');
    }
    return (
       <tr>
           <td>{delivery.userID}</td>
           <td onClick={handleOnCLick}>{delivery.shop}</td>
       </tr>
    );
};

export default Delivery;