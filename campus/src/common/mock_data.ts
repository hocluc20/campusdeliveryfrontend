import {IOrderings} from "./models/IOrderings";

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
        deliveryTime: "13:10:12"
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
        deliveryTime: "11:10:00"
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
        deliveryTime: "13:45:00"
    }
]

//export const mock_delivery