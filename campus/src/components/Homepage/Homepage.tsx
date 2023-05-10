import React, {useEffect, useState} from 'react';
import LoggedUserField from "../basicComponents/LoggedUserField";
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
import axios from "axios";

interface HomepageProps{
    currentUser: IUserReplyLogin
}

const Homepage:React.FC<HomepageProps>  = ({currentUser}) => {


    //Delivery array
    const [deliveries, setDeliveries] = useState<IDelivery[]>([]); //Todo initial state


    //fetch to get all deliveries
    const getDeliveries = () => {
        axios.get("https://88442144-d961-4c61-858b-d310943edef8.mock.pstmn.io/delivery/today").then(response => setDeliveries(response.data));
    };

    useEffect(() => {
        getDeliveries();
        //axios.get("https://88442144-d961-4c61-858b-d310943edef8.mock.pstmn.io/delivery/today").then(response => setDeliveries(response.data));

    })




    // useEffect(() => {
    //     void (async () => {
    //         axios.get("https://6cc22942-f08b-43f2-b374-a999e452ea25.mock.pstmn.io/delivery/today").then(response => setDeliveries(response.data));
    //     }) ()
    // },[])

    //add new delivery to deliveries
    const addNewDelivery = (newDelivery: INewDelivery) => {
        const newDeliveryFinal: IDelivery  = {
            id: deliveries.length,
            userID: newDelivery.userID,
            shop: newDelivery.shop,
            deliveryDate: JSON.stringify(Date.now()),
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