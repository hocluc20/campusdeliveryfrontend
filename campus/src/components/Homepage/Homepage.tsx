import React from 'react';
import LoggedUserField from "./LoggedUserField";
import {mock_delivery} from "../../common/mock_data_orderings";
import {mock_user} from "../../common/mock_data_orderings";
import {mock_newDelivery} from "../../common/mock_data_orderings";
import DeliveryAddinng from "./DeliveryAddinng";
import DeliveryList from "./DeliveryList";
import {IUserReplyLogin} from "../../common/models/IUserReplyLogin";
interface HomepageProps{
    currentUser: IUserReplyLogin
}

const Homepage:React.FC<HomepageProps>  = ({currentUser}) => {
    return (
        <div>
            <LoggedUserField user={currentUser}/>
            <DeliveryAddinng newDelivery={mock_newDelivery}/>
            <DeliveryList deliveries={mock_delivery}/>
        </div>
    );
};

export default Homepage;