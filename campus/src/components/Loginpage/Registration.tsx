import React, {FormEvent} from 'react';
import {Link, Outlet} from "react-router-dom";
import {IUserRegister} from "../../common/models/IUserRegister";

const Registration = () => {

    const handleSubmit=(e:FormEvent<HTMLFormElement>) =>{

        e.preventDefault();


        const newUser:IUserRegister = {
            username:e.currentTarget.username.value,
            email:e.currentTarget.email.value,
            userpassword:e.currentTarget.password.value,
            firstname:e.currentTarget.firstname.value,
            lastname:e.currentTarget.lastname.value,
            klasse:e.currentTarget.klasse.value
        }
        console.log(JSON.stringify(newUser));

    }
    return (
        <div className="LoginForm">
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <h1>Registrierung</h1>
                    <label htmlFor="tfUsername"></label>
                    <input type="text" id="username" placeholder={"Benutzername"} />
                </div>
                <div className="input-group">
                    <label htmlFor="tfFirstname"></label>
                    <input type="text" id="firstname" placeholder={"Vorname"} />
                </div>
                <div className="input-group">
                    <label htmlFor="tfLastname"></label>
                    <input type="text" id="lastname" placeholder={"Nachname"} />
                </div>
                <div className="input-group">
                    <label htmlFor="tfClass"></label>
                    <input type="text" id="klasse" placeholder={"Jahrgang"} />
                </div>
                <div className="input-group">
                    <label htmlFor="tfEMail"></label>
                    <input type="text" id="email" placeholder={"E-Mail"} />
                </div>
                <div className="input-group">
                    <label htmlFor="tfPassword"></label>
                    <input type="password" id="password" placeholder={"Password"}/>
                </div>
                <button type="submit" className="login-button">Registrieren</button>


            </form>

        </div>
    );
};

export default Registration;