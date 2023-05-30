import React from 'react';
import {IDelivery} from "../../common/models/IDelivery";
import { Route, useNavigate } from "react-router-dom";
import Bestellpage from "../Bestellpage/Bestellpage";

interface DeliveryProps {
    delivery: IDelivery

}

const Delivery: React.FC<DeliveryProps> = ({delivery}) => {

    const navigate = useNavigate();
    const handleOnCLick = () => {
        navigate('/ownerpage');
    }
    return (
        <>
            <br />
            <tr style={{ padding: 5 }}>
                {/*<td style={{ padding: 5, backgroundColor: '#FFB043', color: '#2c2c2c', borderRadius: 10, boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>*/}
                {/*    {delivery.userID}*/}
                {/*</td>*/}
                {/*<td onClick={handleOnCLick} style={{ padding: 5, backgroundColor: '#FFB043', color: '#2c2c2c',borderRadius: 10, boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'}}>*/}
                {/*    {delivery.shop}*/}
                {/*</td>*/}
                <div className="cards" onClick={handleOnCLick}>
                    <div className="card gold">
                        <p className="tip">{delivery.shop}</p>
                        <p className="second-text">{delivery.userID}</p>
                    </div>
                </div>
            </tr>
        </>
    );

};

export default Delivery;