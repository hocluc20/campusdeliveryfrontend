import React, {useEffect, useState} from "react";
import "./order.css";
import {IContactDetails} from "../../common/models/IContactDetails";
import {IOrderings} from "../../common/models/IOrderings";
import {mock_oderings} from "../../common/mock_data_orderings";
import {IDelivery} from "../../common/models/IDelivery";


const getTodo = (url: string): Promise<IOrderings[]> => {
    return (fetch(url).then(response => response.json() as Promise<IOrderings[]>));
};

const getName = (url: string): Promise<IOrderings[]> => {
    return fetch(url).then((response) => response.json() as Promise<IOrderings[]>);
};

const OrderList: React.FC = () => {
    const [orders, setOrders] = useState<IOrderings[]>([]);
    let id = 1;
    useEffect(() => {
        getTodo('https://3784655d-5298-453e-84fd-bb8ee202002a.mock.pstmn.io/getAllDel').then((data) => {
            setOrders(data);
            console.log(data[0].userID);
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
                    <h3>Es sind {orders.length} Bestellungen vorhanden!</h3>
                    {orders.map((order) => {
                            return (
                                <li className="listItem" key={order.id}>
                                    <div>
                                        {/*<strong>Name:</strong> {getName("/"+order.userID)[Symbol.toStringTag]}*/}
                                    </div>
                                    <div>
                                        <strong>Geschäft: </strong> {order.shop}
                                    </div>
                                    <div>
                                        <strong>Preis insgesamt: </strong> {order.price}
                                    </div>
                                    <div>
                                        <strong>Anzahl: </strong> {order.quantity}
                                    </div>
                                    <div>
                                        <strong>Datum: </strong> {order.deliveryDate}
                                    </div>
                                    <div>
                                        <strong>Zeit: </strong> {order.deliveryTime}
                                    </div>
                                    <div>
                                        <strong>Produkt: </strong>{order.product}
                                    </div>
                                    <div>
                                        <strong>Notizen: </strong> {order.notes}
                                    </div>
                                    <div>
                                        <button onClick={() => handleAccept(order.id)}>Akzeptieren</button>
                                        <button onClick={() => handleDecline(order.id)}>Verwerfen</button>
                                    </div>
                                </li>
                            )
                        }
                    )}
                </ul>
            </div>
        </>
    );
};

export default OrderList;