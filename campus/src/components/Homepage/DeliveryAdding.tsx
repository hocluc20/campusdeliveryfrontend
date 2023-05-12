import React, {FormEvent, useState} from 'react';
import {INewDelivery} from "../../common/models/INewDelivery";
import {IUserReplyLogin} from "../../common/models/IUserReplyLogin";
import {fireChangeForInputTimeIfValid} from "@testing-library/user-event/dist/keyboard/shared";
import axios from "axios";
import {mock_data_shops} from "../../common/mock_data_shop";
import {IShop} from "../../common/models/IShop";

interface DeliveryAddingProps{
    newDelivery: INewDelivery
    currentUser: IUserReplyLogin
    addNewDelivery: (newDelivery:INewDelivery) => void
}

// const getShops = () =>{
//     axios.get("");
// }

const DeliveryAdding:React.FC<DeliveryAddingProps> = ({addNewDelivery, currentUser}) => {
     const [shopList, setShopList] = useState<IShop[]>(mock_data_shops/*getShops()*/);

    // const submitNewDelivery = (e:FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //
    //     const newDelivery:INewDelivery = {
    //         userID : currentUser.id,
    //         shop:  e.currentTarget.shopLabel.value,
    //         deliveryTime: e.currentTarget.deliveryTime.value
    //     };
    //     console.log("newDelivery");
    //     console.log(newDelivery);
    //     addNewDelivery(newDelivery);
    // }

    const submitNewDelivery = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newDelivery: INewDelivery = {
            userID: currentUser.id,
            shop: e.currentTarget.shopLabel.value,
            deliveryTime: e.currentTarget.deliveryTime.value
        };

        console.log("newDelivery", newDelivery);
        addNewDelivery(newDelivery);
    };





    return (
        <div>
            <form onSubmit={e => submitNewDelivery(e)}>
                <label>Geschäft</label>
                <select id={"shopLabelId"} name={"shopLabel"}>
                    {shopList.map((shop) => (
                        <option key={shop.id} value={shop.name}>{shop.name}</option>
                    ))}
                    </select>

                <label>Abholzeit</label>
                <input name={"deliveryTime"}   type={"time"}/>

                <button type={"submit"} name={"submitNewDeliveryButton"} >Submit</button>
            </form>

        </div>
    );
};

export default DeliveryAdding;