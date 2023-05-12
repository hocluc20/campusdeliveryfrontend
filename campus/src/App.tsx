// import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Login from "./components/Loginpage/Login";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Registration from "./components/Loginpage/Registration";
import Delivery from "./components/Homepage/Delivery";
import Homepage from "./components/Homepage/Homepage";
import {IUserReplyLogin} from "./common/models/IUserReplyLogin";
import {useState} from "react";
import Order from "./components/lukas/Order";
import {CurrentUserContext, ICurrentUserContextValue} from '../src/common/contexts/ICurrentUserContextValue';



function App() {

    let [currentuser,setCurrentuser] = useState<IUserReplyLogin>({    id:1,
        username:"seli",
        email:"edesec20@htl-kaindorf.at",
        userpassword:"pauliii",
        firstname:"selina",
        lastname:"edelsbrunner",
        numberOfDeliveries:5,
        klasse:"chif20",});

    const setCurrentUser = (cu: IUserReplyLogin) => {
        currentuser = cu;
    }


    return (
    <div className="App">
        <CurrentUserContext.Provider value={{currentUser: currentuser, setCurrentUser: setCurrentuser}}>


        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Login/>}/>
                <Route path={"/registration"} element={<Registration/>}/>
                <Route path={"/login"} element={<Login/>}/>
                <Route path={"/homepage"} element={<Homepage/>}/>
                <Route path={"/ownerpage"} element={<Order />}/>
            </Routes>
        </BrowserRouter>

        </CurrentUserContext.Provider>


    </div>
  );
}

export default App;
