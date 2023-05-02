// @ts-ignore
import React, {useEffect, useState} from "react";
import "./order.css";
import {IContactDetails} from "../../common/models/IContactDetails";
import {IOrderings} from "../../common/models/IOrderings";

// interface Order {
//     id: number;
//     name: string;
//     price: number;
//     products: string[];
//     notes: string;
// }

const getTodo = (url: string): Promise<IOrderings[]> => {
    return fetch(url).then((response) => response.json() as Promise<IOrderings[]>);
};

const getName = (url: string): Promise<IContactDetails[]> => {
    return fetch(url).then((response) => response.json() as Promise<IContactDetails[]>);
};

const OrderList: React.FC = () => {
    const [orders, setOrders] = useState<IOrderings[]>([]);

    useEffect(() => {
        getTodo("https://example.com/orders").then((data) => {
            setOrders(data);
        });
    }, [getTodo]);

    const handleAccept = (orderId: number) => {
        // Logic for accepting the order
        console.log(`Accepted order with ID: ${orderId}`);
    };

    const handleDecline = (orderId: number) => {
        // Logic for declining the order
        console.log(`Declined order with ID: ${orderId}`);
    };

    return (
        <div>
            <h1>Bestellungen</h1>
            <ul className="noBullet">
                {orders.map((order) => (
                    <li className="listItem" key={order.id}>
                        <div>
                            <strong>Name:</strong> {getName("/"+order.userID)[Symbol.toStringTag]}
                        </div>
                        <div>
                            <strong>Shop:</strong> {order.shop}
                        </div>
                        <div>
                            <strong>Preis insgesamt:</strong> ${order.price}
                        </div>
                        <div>
                            <strong>Date:</strong> {order.deliveryDate}
                        </div>
                        <div>
                            <strong>Time:</strong> {order.deliveryTime}
                        </div>
                        <div>
                            <strong>Produkte:</strong>${order.product}
                        </div>
                        <div>
                            <strong>Notes:</strong> {order.notes}
                        </div>
                        <div>
                            <button onClick={() => handleAccept(order.id)}>Akzeptieren</button>
                            <button onClick={() => handleDecline(order.id)}>Verwerfen</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OrderList;


/*{
            id: 1,
            name: "John Doe",
            price: 5,
            products: ["Product 1", "Product 2", "Product 3"],
            notes: "Without Cucumbers",
        },
        {
            id: 2,
            name: "Jane Smith",
            price: 3,
            products: ["Product 4", "Product 5"],
            notes: "",
        },
        {
            id: 3,
            name: "Noah Till",
            price: 12,
            products: ["Product 7"],
            notes: "With ketchup",
        },
        {
            id: 4,
            name: "Noah Till",
            price: 12,
            products: ["Product 7"],
            notes: "With ketchup",
        },*/