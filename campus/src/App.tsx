// import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Login from "./components/Loginpage/Login";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Registration from "./components/Loginpage/Registration";
import LoggedUserField from "./components/Homepage/LoggedUserField";
import Delivery from "./components/Homepage/Delivery";

function App() {


    return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Login/>}/>
                <Route path={"/registration"} element={<Registration/>}/>
                <Route path={"/login"} element={<Login/>}/>
                <Route path={"/homepage"} element={<h1>Homepage</h1>}/>

            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
