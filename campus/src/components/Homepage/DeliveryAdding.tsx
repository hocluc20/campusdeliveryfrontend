import React, {FormEvent, useContext, useState} from 'react';
import {INewDelivery} from "../../common/models/INewDelivery";
import {IUserReplyLogin} from "../../common/models/IUserReplyLogin";
import {fireChangeForInputTimeIfValid} from "@testing-library/user-event/dist/keyboard/shared";
import axios from "axios";
import {mock_data_shops} from "../../common/mock_data_shop";
import {IShop} from "../../common/models/IShop";
import {CurrentUserContext, ICurrentUserContextValue} from "../../common/contexts/ICurrentUserContextValue";
import "../lukas/order.css";


interface DeliveryAddingProps {
    newDelivery: INewDelivery
    addNewDelivery: (newDelivery: INewDelivery) => void
}

// const getShops = () =>{
//     axios.get("");
// }

const DeliveryAdding: React.FC<DeliveryAddingProps> = ({addNewDelivery}) => {
    const [shopList, setShopList] = useState<IShop[]>(mock_data_shops/*getShops()*/);
    const currentUser: ICurrentUserContextValue = useContext(CurrentUserContext);


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
            userID: currentUser.currentUser.id,
            shop: e.currentTarget.shopLabel.value,
            deliveryTime: e.currentTarget.deliveryTime.value
        };

        console.log("newDelivery", newDelivery);
        addNewDelivery(newDelivery);
    };


    return (
        <>
            <div>
                <form onSubmit={e => submitNewDelivery(e)}>
                    <label className="tabbed-label">Geschäft:    </label>
                    <select id={"shopLabelId"} name={"shopLabel"}>
                        {shopList.map((shop) => (
                            <option key={shop.id} value={shop.name}>{shop.name}</option>
                        ))}
                    </select>
                    <label className="tabbed-label">    Abholzeit:    </label>
                    <input name={"deliveryTime"} type={"time"}/>
                    <label className="tabbed-label">    </label>
                    <button type={"submit"} name={"submitNewDeliveryButton"} className={"slideButton"}>Submit
                    </button>
                    <br></br>
                    <br></br>
                </form>
            </div>
        </>
    );
};

export default DeliveryAdding;