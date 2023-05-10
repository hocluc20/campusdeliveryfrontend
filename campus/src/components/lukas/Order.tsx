import React, {useEffect, useState} from "react";
import "./order.css";
import {IContactDetails} from "../../common/models/IContactDetails";
import {IOrderings} from "../../common/models/IOrderings";
import {mock_oderings, mock_user} from "../../common/mock_data_orderings";
import {IDelivery} from "../../common/models/IDelivery";
import LoggedUserField from "../Homepage/LoggedUserField";


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
        getTodo('https://02c35947-d116-48f4-92a3-2e08f7fb570a.mock.pstmn.io/getd').then((data) => {
            setOrders(data);
            console.log(data[0].userID);
        }).catch(e => console.log(e));
    }, []);

    const getSumOfOrders = () :number => {
        let current = 0;
        orders.map(m =>{
            if(m.currentStatus === "accepted")
                current += m.price;
        })
        return current;
    }

    const onPressWeiterZuEinkaufsliste = () =>{

    }

    const handleAccept = (orderId: number) => {
        const currentOrders = [...orders];
        orderId--;
        if (orderId !== -1) {
            const updatedOrder = { ...currentOrders[orderId], currentStatus: "accepted" };
            const updatedOrders = [...currentOrders];
            updatedOrders[orderId] = updatedOrder;
            setOrders(updatedOrders);
            updateServerWithUpdatedOrderings();
        }
    };

    const handleWaiting = (orderId: number) => {
        const currentOrders = [...orders];
        orderId--;
        if (orderId !== -1) {
            const updatedOrder = { ...currentOrders[orderId], currentStatus: "waiting" };
            const updatedOrders = [...currentOrders];
            updatedOrders[orderId] = updatedOrder;
            setOrders(updatedOrders);
            updateServerWithUpdatedOrderings();
        }
    };

    const handleDeclined = (orderId: number) => {
        const currentOrders = [...orders];
        orderId--;
        if (orderId !== -1) {
            const updatedOrder = { ...currentOrders[orderId], currentStatus: "declined" };
            const updatedOrders = [...currentOrders];
            updatedOrders[orderId] = updatedOrder;
            setOrders(updatedOrders);
            updateServerWithUpdatedOrderings();
        }
    };

    const updateServerWithUpdatedOrderings = () =>{

    }


    return (
        <>
            <div className={"orders"}>
                <h1 style={{position: "fixed", textAlign: "center", width: "100%", marginBottom: 100}}>Bestellungen</h1>
                <div>
                    <h3 style={{position: "fixed", textAlign: "center", width: "100%", marginTop: 50}}>Es
                        sind {orders.length} Bestellungen vorhanden!</h3>
                    <div className={"userName"}><LoggedUserField user={mock_user}/></div>
                    <ul className="noBullet" style={{
                        display: "flex",
                        height: "100%",
                        marginLeft: 50,
                        marginRight: 50,
                        minWidth: 500,
                    }}>
                        {orders.map((order) => {
                                if (order.currentStatus === "declined") {
                                    return (
                                        <li className="listItemDeclined" key={order.id}
                                            style={{
                                                margin: 20,
                                                display: "inline",
                                                marginTop: 100,
                                                textAlign: "left"
                                            }}>
                                            <div className={"oneList"} style={{width: 350, height: 240}}>
                                                <div>
                                                    <h2 style={{color:"red"}}>{order.currentStatus}</h2>
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
                                                    <strong>Produkt: </strong>{order.product}
                                                </div>
                                                <div>
                                                    <strong>Notizen: </strong> {order.notes}
                                                </div>
                                                <div>
                                                    <button style={{margin: 5, backgroundColor:"#FFB043"}}
                                                            onClick={() => handleWaiting(order.id)}>Warten
                                                    </button>
                                                    <button style={{margin: 5, backgroundColor:"green"}}
                                                            onClick={() => handleAccept(order.id)}>Akzeptieren
                                                    </button>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                } else if (order.currentStatus === "accepted") {
                                    return (
                                        <li style={{
                                            margin: 20,
                                            marginTop: 100,
                                            textAlign: "left"
                                        }} className="listItemAccepted" key={order.id}>
                                            <div style={{width: 350, height: 240}}>
                                                <div>
                                                    <h2 style={{color:"green"}}>{order.currentStatus}</h2>
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
                                                    <strong>Produkt: </strong>{order.product}
                                                </div>
                                                <div>
                                                    <strong>Notizen: </strong> {order.notes}
                                                </div>
                                                <div>
                                                    <button style={{margin: 5, backgroundColor:"#FFB043"}}
                                                            onClick={() => handleWaiting(order.id)}>Warten
                                                    </button>
                                                    <button style={{margin: 5, backgroundColor:"red"}}
                                                            onClick={() => handleDeclined(order.id)}>Verwerfen
                                                    </button>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                } else {
                                    return (
                                        <li className="listItemWaiting" key={order.id} style={{
                                            margin: 20,
                                            marginTop: 100,
                                            textAlign: "left"
                                        }}>
                                            <div style={{width: 350, height: 240}}>
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
                                                    <strong>Produkt: </strong>{order.product}
                                                </div>
                                                <div>
                                                    <strong>Notizen: </strong> {order.notes}
                                                </div>
                                                <div>
                                                    <button style={{margin: 5, backgroundColor:"green"}}
                                                            onClick={() => handleAccept(order.id)}>Akzeptieren
                                                    </button>
                                                    <button style={{margin: 5, backgroundColor:"red"}}
                                                            onClick={() => handleDeclined(order.id)}>Verwerfen
                                                    </button>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                }
                            }
                        )}
                    </ul>
                </div>
            </div>
            <h1 className={"sumOfOrders"}>Summer aller bestätigten Bestellungen: € {getSumOfOrders()}</h1>
            <div>
                <button className={"okayButton"} onClick={onPressWeiterZuEinkaufsliste}>Weiter zur Einkaufsliste</button>
            </div>
        </>
    )
        ;
};

export default OrderList;