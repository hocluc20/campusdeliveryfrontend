import React, {useEffect, useState} from 'react';
import LoggedUserField from "./LoggedUserField";
import {mock_delivery} from "../../common/mock_data_orderings";
import {mock_user} from "../../common/mock_data_orderings";
import {mock_newDelivery} from "../../common/mock_data_orderings";
import DeliveryAdding from "./DeliveryAdding";
import {IUserReplyLogin} from "../../common/models/IUserReplyLogin";
import DeliveryList from "./DeliveryList";
import {INewDelivery} from "../../common/models/INewDelivery";
import {IDelivery} from "../../common/models/IDelivery";
import {IOrderings} from "../../common/models/IOrderings";
import delivery from "./Delivery";

interface HomepageProps{
    currentUser: IUserReplyLogin
}

const Homepage:React.FC<HomepageProps>  = ({currentUser}) => {
    //fetch to get all deliveries
    const getDeliveries = (): Promise<IDelivery[]> => {
        return fetch("localhost:3000/delivery/today").then((response) => response.json() as Promise<IDelivery[]>);
    };

    //Delivery array
    const [deliveries, setDeliveries] = useState<IDelivery[]>([]); //Todo initial state

    useEffect(() => {
        getDeliveries().then((data) => {
            setDeliveries(data);
            console.log(data);
        }).catch(e => console.log(e));
    }, []);


    //add new delivery to deliveries
    const addNewDelivery = (newDelivery: INewDelivery) => {
        const newDeliveryFinal: IDelivery  = {
            id: deliveries.length,
            userID: newDelivery.userID,
            shop: newDelivery.shop,
            deliveryDate: "12.10.2023",
            deliveryTime: newDelivery.deliveryTime
        }
        setDeliveries([...deliveries, newDeliveryFinal]);
    }
    return (
        <div>
            <LoggedUserField user={currentUser}/>
            <DeliveryAdding newDelivery={mock_newDelivery} currentUser={currentUser} addNewDelivery={addNewDelivery}/>
            <DeliveryList deliveries={deliveries}/>
        </div>
    );
};

export default Homepage;