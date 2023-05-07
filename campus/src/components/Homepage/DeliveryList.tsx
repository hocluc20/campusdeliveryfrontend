import React from 'react';
import {IDelivery} from "../../common/models/IDelivery";
import Delivery from "./Delivery";

interface DeliveryListProps{
    deliveries: IDelivery[]
}

const DeliveryList:React.FC<DeliveryListProps> = ({deliveries}) => {

    return (
        <div>
            <h1>Bisherige Aufträge</h1>
            <table>
                <thead>

                </thead>
               <tbody>
               {
                   deliveries.map(d  =>{
                       return(
                           <Delivery key={d.id} delivery={d}/>
                        )

                    })
               }
               </tbody>
            </table>
        </div>
    );
};

export default DeliveryList;