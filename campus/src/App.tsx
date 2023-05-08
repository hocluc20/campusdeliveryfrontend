// import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Login from "./components/Loginpage/Login";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Registration from "./components/Loginpage/Registration";

function App() {


    return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Login/>}/>
                <Route path={"/registration"} element={<Registration/>}/>
                <Route path={"/login"} element={<Login/>}/>

            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
