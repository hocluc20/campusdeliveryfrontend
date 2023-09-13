import React, { useState, useEffect } from 'react';
import { IDelivery } from "../../common/models/IDelivery";
import { useNavigate } from "react-router-dom";
import { IUserGetNamesFromID } from "../../common/models/IUserGetNamesFromID";
import axios from "axios";

interface DeliveryProps {
    delivery: IDelivery;
}

const Delivery: React.FC<DeliveryProps> = ({ delivery }) => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState<IUserGetNamesFromID>({
        username: "undefined",
        firstname: "",
        lastname: ""
    });

    const handleOnClick = () => {
        navigate('/bestellpage', { state:{selectedDelivery: delivery}});
        // this.props.router.push({ pathname: '/bestellpage',
        //     selectedDelivery: delivery
        // });

        // {/*<Route path={"/bestellpage"} element={<Bestellpage selectedDelivery={mock_delivery[0]} />}/>*/}

    };

    const getUser = async (): Promise<IUserGetNamesFromID> => {
        try {
            const response = await axios.get("http://localhost:3001/user/getUser?user=" + delivery.userID);
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
            const userDataFromAPI = await getUser();
            setUserData(userDataFromAPI);
        };
        fetchData();
    }, []);

    return (
        <>
            <tr onClick={handleOnClick} style={{
                padding: 5,
                backgroundColor: '#FFB043',
                color: '#2c2c2c',
                borderRadius: 10,
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
            }}>
                <td style={{ padding: 5 }}>
                    {userData.username + " (" + userData.firstname + " " + userData.lastname + ")"}
                </td>
                <td  style={{
                    padding: 5,
                    backgroundColor: '#FFB043',
                    color: '#2c2c2c',
                    borderRadius: 10,
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                }}>
                    {delivery.shop}
                </td>
            </tr>
        </>
    );
};

export default Delivery;
