import React, {useContext, useEffect, useState} from 'react';
import {CurrentUserContext, ICurrentUserContextValue} from "../../common/contexts/ICurrentUserContextValue";
import {IDelivery} from "../../common/models/IDelivery";
import {useLocation} from "react-router-dom";
import {IUserGetNamesFromID} from "../../common/models/IUserGetNamesFromID";
import axios from "axios";
import {IProduct} from "../../common/models/IProduct";
import {IShop} from "../../common/models/IShop";

interface BestellpageProps {
}

const Bestellpage: React.FC<BestellpageProps> = () => {
    const [productList, setProductList] = useState<IProduct[]>([]);
    const [shopList, setShopList] = useState<IShop[]>([]);

    const [selectedProduct, setSelectedProduct] = useState<string>("");

    const location = useLocation();
    const selectedDeliv = location.state.selectedDelivery;
    const currentUser: ICurrentUserContextValue = useContext(CurrentUserContext);
    const [userData, setUserData] = useState<IUserGetNamesFromID>({
        username: "undefined",
        firstname: "",
        lastname: ""
    });

    // useEffect(() => {
    //     console.log('Component mounted and DOM ready');
    //     axios.get("http://localhost:3001/shops/getProducts?shop="+ selectedDeliv.shop).then(response => {
    //         setProductList(response.data)
    //     });
    // }, []);


    const originalTimeStr = selectedDeliv.deliveryTime; // Replace with your time string
    const originalTime = new Date(`2000-01-01T${originalTimeStr}`);
    const subtractedTime = new Date(originalTime);
    subtractedTime.setHours(subtractedTime.getHours() - 2);
    const formattedSubtractedTime = subtractedTime.toTimeString().split(' ')[0]; // Format as HH:MM:SSormat as YYYY-MM-DD


    const getUser = async (userID: number): Promise<IUserGetNamesFromID> => {
        try {
            const response = await axios.get("http://localhost:3001/user/getUser?user=" + userID);
            return response.data as IUserGetNamesFromID;
        } catch (error) {
            console.error("Error fetching user data:", error);
            return {
                username: "undefined",
                firstname: "",
                lastname: ""
            };
        }
    };


    useEffect(() => {
        const fetchData = async () => {
            const userDataFromAPI = await getUser(selectedDeliv.userID);
            setUserData(userDataFromAPI);

            // axios.get("http://localhost:3001/shops/getProducts?shop=" + selectedDeliv.shop.id).then(response => {
            //     setProductList(response.data)
            // });
        };

        fetchData();
    }, []);

    const getPoducts = async () => {
        try {
            const response = await axios.get("http://localhost:3001/shops/getProducts?shop="+ 1);
            setProductList(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }



    // const getId = (shopname: string): number => {
    //     getAllShops().then(
    //     const foundShop = shopList.find(s => s.name === shopname);
    //     if(foundShop)
    //     {
    //         return foundShop.id
    //     }
    //     else
    //     {
    //         return -1;
    //     }
    //    )
    //
    // }

    return (
        <>
            <div>
                    <h1>Neue Bestellung</h1>
                <h1> Selected deliv{selectedDeliv.shop}</h1>
                    <div>Bestellung an: {userData.firstname + " " + userData.lastname}</div>
                    <div>Zielort: {selectedDeliv.shop}</div>
                    <div>Bestellung bis: {formattedSubtractedTime}</div>
                    <div>Abholzeit um: {selectedDeliv.deliveryTime}</div>
            </div>
            <div>
                <h2>Bestellungsdetails</h2>
                <label>Stück
                    <br/>
                    <input type={"number"}></input>
                </label>

                <br/>
                <br/>
                <br/>
                <label>Produkt
                <br/>
                <select value={selectedProduct} onChange={(e) => setSelectedProduct(e.target.value)}>
                    <option value="">Please select a product</option>
                    {productList.map((product: IProduct) => (
                        <option key={product.product.length} value={product.product}>
                            {product.product}
                        </option>
                    ))}
                </select>
            </label>



                <br/>
                <br/>
                <br/>
                <label>Preis
                    <br/>
                    <input readOnly={selectedDeliv.id}/>
                </label>
            </div>

            <button type={"submit"} name={"submitNewDeliveryButton"} className={"slideButton"}>Submit</button>


        </>


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