import {IOrderings} from "./models/IOrderings";
import {IDelivery} from "./models/IDelivery";
import {INewDelivery} from "./models/INewDelivery";
import {IUserRegistrationData} from "./models/IUserRegistrationData";

export const mock_oderings : IOrderings[] = [
    {
        id: 1,
        delivery: 1,
        userID: 1231,
        product: "Red Bull",
        quantity: 2,
        price: 3,
        currentStatus: "waiting",
        shop: "Spar",
        deliveryDate: "14.04.2023",
        deliveryTime: "13:10:12",
        notes: "sugarfree"
    },
    {
        id: 2,
        delivery: 1,
        userID: 1232,
        product: "Pommes",
        quantity: 1,
        price: 4,
        currentStatus: "waiting",
        shop: "McDonalds",
        deliveryDate: "15.04.2023",
        deliveryTime: "11:10:00",
        notes: "with sour cream sauce"
    },
    {
        id: 3,
        delivery: 4,
        userID: 4444,
        product: "guadn Salat",
        quantity: 3,
        price: 5,
        currentStatus: "waiting",
        shop: "Billa",
        deliveryDate: "15.05.2023",
        deliveryTime: "13:45:00",
        notes: "mit guadm dressing"
    }
]

export const mock_delivery : IDelivery[] = [
    {
    id: 1,
        userID: 2,
    shop: "McDonalds",
    deliveryDate: "13.12.2002",
    deliveryTime: "12:13:12"
    },

    {
        id: 2,
        userID: 3,
        shop: "Spar",
        deliveryDate: "11.04.2023",
        deliveryTime: "13:15:00"
    }

]

export const mock_newDelivery : INewDelivery = {
    userID: 2,
    shop: "Spar",
    deliveryTime: "13.12.200213:15:00"

}

export const mock_user: IUserRegistrationData = {
    username: "bauemc20",
    email: "bauemc20@htl-kaindorf.at",
    userpassword: "4ade80",
    firstname: "Emma",
    lastname: "Bauer",
    klasse: "3CHIF"
}
