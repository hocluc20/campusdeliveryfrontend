import React from 'react';
import {IDelivery} from "../../common/models/IDelivery";
import Delivery from "./Delivery";
import "../lukas/order.css";


interface DeliveryListProps {
    deliveries: IDelivery[]
}

const DeliveryList: React.FC<DeliveryListProps> = ({deliveries}) => {


    return (
        <>
            <h1>Bisherige Aufträge</h1>
            <div className={"divTable"}>
                <table className="tableShops">
                    <thead>
                    </thead>
                    <tbody>
                    {/*<br></br>*/}
                    {
                        deliveries.map(d => {
                            return (
                                <Delivery key={d.id} delivery={d}/>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default DeliveryList;