import React from 'react';
import LoggedUserField from "./LoggedUserField";
import {mock_delivery} from "../../common/mock_data_orderings";
import {mock_user} from "../../common/mock_data_orderings";
import {mock_newDelivery} from "../../common/mock_data_orderings";
import DeliveryAddinng from "./DeliveryAddinng";
import DeliveryList from "./DeliveryList";

const Homepage = () => {
    return (
        <div>
            <LoggedUserField user={mock_user}/>
            <DeliveryAddinng newDelivery={mock_newDelivery}/>
            <DeliveryList deliveries={mock_delivery}/>
        </div>
    );
};

export default Homepage;