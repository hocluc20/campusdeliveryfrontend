import React, {FormEvent, useState} from 'react';
import {Link, Outlet} from "react-router-dom";
import Registration from "./Registration";

const Login = () => {




    return (
        <div className="LoginForm">
            <form>
                <div className="input-group">
                    <h1>Anmeldung</h1>
                    <label htmlFor="tfUsername"></label>
                    <input type="text" id="tfUsername" placeholder={"E-Mail/Benutzername"} />
                </div>
                <div className="input-group">
                    <label htmlFor="tfPassword"></label>
                    <input type="text" id="tfPassword" placeholder={"Password"}/>
                </div>
                <button type="submit" className="login-button">Anmelden</button>

                <Link to={"/registration"}>Registrieren</Link>
            </form>
            <Outlet/>
        </div>

    );
};

export default Login;