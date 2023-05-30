import React, {useContext} from 'react';
import Delivery from "../Homepage/Delivery";
import DeliverInformation from "./DeliverInformation";
import {CurrentUserContext, ICurrentUserContextValue} from "../../common/contexts/ICurrentUserContextValue";
import {IDelivery} from "../../common/models/IDelivery";
import {IUserReplyLogin} from "../../common/models/IUserReplyLogin";

interface BestellpageProps{
    selectedDelivery: IDelivery
    selectedUser: IUserReplyLogin
}

const Bestellpage:React.FC<BestellpageProps> = ({selectedDelivery, selectedUser}) => {
    const currentUser: ICurrentUserContextValue = useContext(CurrentUserContext);
    const orderTime = selectedDelivery.deliveryTime; //TOdo real time

    return (
        <div>
            <div>{selectedUser.firstname} {selectedUser.lastname}</div>
            <div>Zielort: {selectedDelivery.shop}</div>
            <div>Bestellung bis: {selectedDelivery.deliveryTime}</div>
            <div>Abholzeit um: {selectedDelivery.deliveryTime}</div>

        </div>

        /*
        Delivery person
        Location
        Time
        pick-up time

        Mein name: username
        Was will ich haben?
        Stk, Produkt(Dropdown) Preis

        Notizen

        Summe:
        Button: Bestellung absenden

         */
    );
};

export default Bestellpage;