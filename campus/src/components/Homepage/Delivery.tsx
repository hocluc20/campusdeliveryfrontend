import React from 'react';
import {IDelivery} from "../../common/models/IDelivery";
import { Route, useNavigate } from "react-router-dom";
import Bestellpage from "../Bestellpage/Bestellpage";
import axios from "axios";
import {IUserReplyLogin} from "../../common/models/IUserReplyLogin";
import {IUserGetUserID} from "../../common/models/IUserGetUserID";
import {mock_user} from "../../common/mock_data_orderings";

interface DeliveryProps {
    delivery: IDelivery

}

const Delivery: React.FC<DeliveryProps> = ({delivery}) => {

    const navigate = useNavigate();
    const handleOnCLick = () => {
        navigate('/bestellpage');
    }

    const getUserFromDelivery = (): IUserGetUserID =>
    {
        let delUser:IUserGetUserID|undefined;
        axios.get("http://localhost:3001/user/getUser?user="+delivery.userID).then(response => delUser = response.data);
        return delUser as IUserGetUserID;
    }

    // const test = getUserFromDelivery();
    const test = mock_user as IUserGetUserID;

    return (
       <tr>
           <td>{test.lastname}</td>
           <td onClick={handleOnCLick}>{delivery.shop}</td>
       </tr>
    );
};

export default Delivery;