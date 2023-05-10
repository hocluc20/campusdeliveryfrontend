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


function App() {

    const [currentuser,setCurrentuser] = useState<IUserReplyLogin>({
        id:1,
        username:"seli",
        email:"sadf",
        userpassword:"sadf",
        firstname:"asdf",
        lastname:"sdf",
        numberOfDeliveries:1,
        klasse:"chif20",
    });

    return (
    <div className="App">

        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Login currentuser={currentuser} setcurrentuser={setCurrentuser}/>}/>
                <Route path={"/registration"} element={<Registration/>}/>
                <Route path={"/login"} element={<Login currentuser={currentuser} setcurrentuser={setCurrentuser}/>}/>
                <Route path={"/homepage"} element={<Homepage currentUser={currentuser}/>}/>
                <Route path={"/ownerpage"} element={<Order/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
