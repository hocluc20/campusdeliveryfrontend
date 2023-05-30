import React, {useContext, useEffect, useState} from 'react';
import LoggedUserField from "../basicComponents/LoggedUserField";
import {mock_newDelivery} from "../../common/mock_data_orderings";
import DeliveryAdding from "./DeliveryAdding";
import {IUserReplyLogin} from "../../common/models/IUserReplyLogin";
import DeliveryList from "./DeliveryList";
import {INewDelivery} from "../../common/models/INewDelivery";
import {IDelivery} from "../../common/models/IDelivery";
import "../lukas/order.css"
import axios from "axios";
import {mock_delivery} from "../../common/mock_data_orderings";
import {CurrentUserContext, ICurrentUserContextValue} from "../../common/contexts/ICurrentUserContextValue";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

interface HomepageProps{
}

const Homepage:React.FC<HomepageProps>  = () => {
    //Delivery array

    //fetch to get all deliveries
    // const getDeliveries = async () => {
    //     let response = await axios.get("localhost:3001/delivery/today").then(response => console.log(response.data+"erer"));
    //     //setDeliveries(response.data as IDelivery[])).catch(error => console.log("Errorrrrrrrrrrrrrrrrrrrrrrrr"+error
    //     return response;
    // };

    const getDeliveries = ():IDelivery[] | null => {
        fetch("http://localhost:3001/delivery/today").then(response => response.json()).then(data => {
            const deliv: IDelivery[] = data as IDelivery[];

        });
        return null;
    };

    //const [deliveries, setDeliveries] = useState<IDelivery[]>([]); //Todo initial state
    const [deliveries, setDeliveries] = useState<IDelivery[]>(mock_delivery); //Todo initial state
    const currentUser: ICurrentUserContextValue = useContext(CurrentUserContext);

    //
    // useEffect(() => {
    //     getDeliveries();
    //     //axios.get("localhost:3001/delivery/today").then(response => setDeliveries(response.data));
    //     console.log("Testttt that it worked");
    // },deliveries);


    //add new delivery to deliveries
    const addNewDelivery = async (newDelivery: INewDelivery) => {
        const newDeliveryFinal: INewDelivery = {
            userID: newDelivery.userID,
            shop: newDelivery.shop,
            deliveryTime: newDelivery.deliveryTime
        }
        console.log(newDeliveryFinal);
        //const del: IDelivery = await postDelivery(newDeliveryFinal);
        const del: IDelivery = {
            id: 1,
            userID: newDelivery.userID,
            shop: newDelivery.shop,
            deliveryDate: JSON.stringify(Date.now()),
            deliveryTime: newDelivery.deliveryTime
        }
        // @ts-ignore
        setDeliveries([...deliveries, del]);

        //Todo interace withoutPassword
        //Context

        //
        // const newDeliveryFinal: IDelivery = {
        //     id: 1,
        //     userID: newDelivery.userID,
        //     shop: newDelivery.shop,
        //     deliveryDate: JSON.stringify(Date.now()),
        //     deliveryTime: newDelivery.deliveryTime
        // }
    }

    const postDelivery = async (newDeliveryToPost: INewDelivery) =>{
        const res = await axios.post('/delivery/new', {
            user: newDeliveryToPost.userID,
            shop: newDeliveryToPost.shop,
            deliveryTime: newDeliveryToPost.deliveryTime
        });
        return res.data;
    }


    return (
        <div>
            <div className={"userName"}><LoggedUserField/></div>
            <DeliveryAdding newDelivery={mock_newDelivery} addNewDelivery={(newDelivery) =>addNewDelivery(newDelivery)}/>
            {/*<DeliveryAdding newDelivery={mock_newDelivery} currentUser={currentUser} addNewDelivery={addNewDelivery}/>*/}
            <DeliveryList deliveries={deliveries}></DeliveryList>
        </div>
    );
};

export default Homepage;