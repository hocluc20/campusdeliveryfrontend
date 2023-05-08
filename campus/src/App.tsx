// import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Login from "./components/Loginpage/Login";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Registration from "./components/Loginpage/Registration";
import LoggedUserField from "./components/Homepage/LoggedUserField";
import Delivery from "./components/Homepage/Delivery";
import Homepage from "./components/Homepage/Homepage";
import Order from "./components/lukas/Order";
import {mock_user} from "./common/mock_data_orderings";
import {mock_data_userReply} from "./common/moch_data_user";


function App() {


    return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Login/>}/>
                <Route path={"/registration"} element={<Registration/>}/>
                <Route path={"/login"} element={<Login/>}/>
                <Route path={"/homepage"} element={<Homepage currentUser={mock_data_userReply[0]}/>}/>
                <Route path={"/ownerpage"} element={<Order/>}/>

            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
