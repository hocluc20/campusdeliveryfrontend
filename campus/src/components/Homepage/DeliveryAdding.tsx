import React, {FormEvent} from 'react';
import {INewDelivery} from "../../common/models/INewDelivery";
import {IUserReplyLogin} from "../../common/models/IUserReplyLogin";
interface DeliveryAddingProps{
    newDelivery: INewDelivery
    currentUser: IUserReplyLogin
    addNewDelivery: (newDelivery:INewDelivery) => void
}

const DeliveryAdding:React.FC<DeliveryAddingProps> = ({addNewDelivery, currentUser}) => {

    const submitNewDelivery = (e:FormEvent<HTMLFormElement>) => {
        const newDelivery:INewDelivery = {
            userID : currentUser.id,
            shop:  e.currentTarget.shop,
            deliveryTime: e.currentTarget.deliveryTime
        }
        console.log("newDelivery");
        console.log(newDelivery);
        addNewDelivery(newDelivery);
    }
    return (
        <div>
            <form onSubmit={e => submitNewDelivery(e)}>
                <label>Geschäft</label>
                <select id={"shopLabelId"} name={"shopLabel"} defaultValue={"Billa"} >z.B. Billa</select>

                <label>Abholzeit</label>
                <select defaultValue={"12:45:00"}>z.B. Billa</select>


                <button type={"submit"} name={"submitNewDeliveryButton"} >Submit</button>
            </form>

        </div>
    );
};

export default DeliveryAdding;