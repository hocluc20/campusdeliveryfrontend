// import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Login from "./components/Loginpage/Login";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Registration from "./components/Loginpage/Registration";
import LoggedUserField from "./components/Homepage/LoggedUserField";
import Delivery from "./components/Homepage/Delivery";
import Homepage from "./components/Homepage/Homepage";
import {IUserReplyLogin} from "./common/models/IUserReplyLogin";
import {useState} from "react";


function App() {

    const [currentuser,setCurrentuser] = useState<IUserReplyLogin>({
        id:1,
        username:"",
        email:"",
        userpassword:"",
        firstname:"",
        lastname:"",
        numberOfDeliveries:0,
        klasse:"",
    });

    return (
    <div className="App">

        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Login currentuser={currentuser} setcurrentuser={setCurrentuser}/>}/>
                <Route path={"/registration"} element={<Registration/>}/>
                <Route path={"/login"} element={<Login currentuser={currentuser} setcurrentuser={setCurrentuser}/>}/>
                <Route path={"/homepage"} element={<Homepage/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
