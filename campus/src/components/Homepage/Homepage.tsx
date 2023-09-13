import React, {useContext, useEffect, useState} from 'react';
import LoggedUserField from "../basicComponents/LoggedUserField";
import {mock_newDelivery} from "../../common/mock_data_orderings";
import DeliveryAdding from "./DeliveryAdding";
import {IUserComplete} from "../../common/models/IUserComplete";
import DeliveryList from "./DeliveryList";
import {INewDelivery} from "../../common/models/INewDelivery";
import {IDelivery} from "../../common/models/IDelivery";
// import "../lukas/order.css"
import axios from "axios";
import {mock_delivery} from "../../common/mock_data_orderings";
import {CurrentUserContext, ICurrentUserContextValue} from "../../common/contexts/ICurrentUserContextValue";
// import logo from "../lukas/image-removebg-preview.png";

interface HomepageProps {
}

const Homepage: React.FC<HomepageProps> = () => {
    const [deliveries, setDeliveries] = useState<IDelivery[]>([]); //Todo initial state
    const currentUser: ICurrentUserContextValue = useContext(CurrentUserContext);


    useEffect(() => {
        axios.get("http://localhost:3001/delivery/getAll").then(response => {
            setDeliveries(response.data)
        });
    }, []);

    // useEffect(() => {
    //     //axios.get("https://88442144-d961-4c61-858b-d310943edef8.mock.pstmn.io/delivery/today").then(response => setDeliveries(response.data));
    //     console.log("Test that it worked");
    // }, deliveries);

    //add new delivery to deliveries
    const addNewDelivery = async (newDelivery: INewDelivery) => {
        const newDeliveryFinal: INewDelivery = {
            userID: newDelivery.userID,
            shop: newDelivery.shop,
            deliveryTime: newDelivery.deliveryTime
        }
        const finishedDelivery: IDelivery = await postDelivery(newDeliveryFinal);
        // const del: IDelivery = {
        //     id: finishedDelivery.id,
        //     userID: finishedDelivery.userID,
        //     shop: finishedDelivery.shop,
        //     deliveryDate: getDate(),
        //     deliveryTime: newDelivery.deliveryTime + ":00"
        // }
        console.log(finishedDelivery);

        setDeliveries([...deliveries, finishedDelivery]);

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


    const postDelivery = async (newDeliveryToPost: INewDelivery) => {
        const res = await axios.post('http://localhost:3001/delivery/new', {
            user: newDeliveryToPost.userID,
            shop: newDeliveryToPost.shop,
            deliveryTime: newDeliveryToPost.deliveryTime
        });
        return res.data;
    }


    return (
        <>
            <div>

                    <header>
                        <div >
                            {/*<img src={logo} alt="logo" style={{height: 100, marginTop: 15, marginLeft: 15}}/>*/}
                            <div style={{flex: 1, textAlign: 'center'}}>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    marginRight: 200
                                }}>
                                    <h1 style={{marginBottom: 20}}>Homepage</h1>
                                </div>
                            </div>
                            <div style={{textAlign: 'right', marginRight: 300}} className="userName">
                            </div>


                        </div>
                        <LoggedUserField/>

                    </header>


                    <DeliveryAdding
                                    addNewDelivery={(newDelivery) => addNewDelivery(newDelivery)}/>
                    {/*<DeliveryAdding newDelivery={mock_newDelivery} currentUser={currentUser} addNewDelivery={addNewDelivery}/>*/}
                    <DeliveryList deliveries={deliveries}/></div>

    </>
    );
};

export default Homepage;