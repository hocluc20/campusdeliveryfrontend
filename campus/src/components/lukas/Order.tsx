import React, {useEffect, useState} from "react";
import "./order.css";
import {IContactDetails} from "../../common/models/IContactDetails";
import {IOrderings} from "../../common/models/IOrderings";
import {mock_oderings} from "../../common/mock_data_orderings";
import {IDelivery} from "../../common/models/IDelivery";


const getTodo = (url: string): Promise<IOrderings[]> => {
    return fetch(url).then((response) => response.json() as Promise<IOrderings[]>);
};

const getName = (url: string): Promise<IOrderings[]> => {
    return fetch(url).then((response) => response.json() as Promise<IOrderings[]>);
};

const OrderList: React.FC = () => {
    const [orders, setOrders] = useState<IOrderings[]>([]);
    let id = 1;
    useEffect(() => {
        getTodo('https://b6d52a5b-3f46-4df1-aea9-b9810af84307.mock.pstmn.io/getIt').then((data) => {
            setOrders(data);
            console.log(data);
        }).catch(e => console.log(e));
    }, []);

    const handleAccept = (orderId: number) => {
        // Logic for accepting the order
        console.log(`Accepted order with ID: ${orderId}`);
    };

    const handleDecline = (orderId: number) => {
        // Logic for declining the order
        console.log(`Declined order with ID: ${orderId}`);
    };

    return (
        <>
            <div>
                <h1>Bestellungen</h1>
                <ul className="noBullet">
                    <h3>{orders.length}</h3>
                    {orders.map((order) => {
                            return (
                                <li className="listItem" key={order.id}>
                                    <div>
                                        {/*<strong>Name:</strong> {getName("/"+order.userID)[Symbol.toStringTag]}*/}
                                    </div>
                                    <div>
                                        <strong>Shop:</strong> {order.shop}
                                    </div>
                                    <div>
                                        <strong>Preis insgesamt:</strong> {order.price}
                                    </div>
                                    <div>
                                        <strong>Date:</strong> {order.deliveryDate}
                                    </div>
                                    <div>
                                        <strong>Time:</strong> {order.deliveryTime}
                                    </div>
                                    <div>
                                        <strong>Produkte:</strong>{order.product}
                                    </div>
                                    <div>
                                        <strong>Notes:</strong> {order.notes}
                                    </div>
                                    <div>
                                        <button onClick={() => handleAccept(order.id)}>Akzeptieren</button>
                                        <button onClick={() => handleDecline(order.id)}>Verwerfen</button>
                                    </div>
                                </li>
                            )
                        }
                    )}
                    <h3>asdjhfkj</h3>
                </ul>
            </div>
        </>
    );
};

export default OrderList;