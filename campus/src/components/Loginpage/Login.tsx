import React, {FormEvent, useState} from 'react';
import {Link, Outlet} from "react-router-dom";
import Registration from "./Registration";
import {IUserLogin} from "../../common/models/IUserLogin";
import axios from "axios";
import {IUserReplyLogin} from "../../common/models/IUserReplyLogin";
import "./loginCSS.css"

const Login = () => {

    const handleSumit=(e:FormEvent<HTMLFormElement>) =>{
        e.preventDefault();

        const userLogin:IUserLogin = {
            username:e.currentTarget.username.value,
            userpassword:e.currentTarget.password.value
        }

        console.log(JSON.stringify(userLogin));

        axios.post("/user/login",JSON.stringify(userLogin))
            .then(response =>{
                const userLoginBack:IUserReplyLogin = {
                    id:response.data.id,
                    username:response.data.username,
                    email:response.data.email,
                    userpassword:response.data.userpassword,
                    firstname:response.data.firstname,
                    lastname:response.data.lastname,
                    numberOfDeliveries:response.data.numberOfDeliveries,
                    klasse:response.data.klasse,
                }
                console.log(JSON.stringify(userLoginBack));
            })
            .catch(error => {
                if(error == 406){
                    console.log("User does not exist")
                }else if(error == 405){
                    console.log("password is incorrect")
                }
            });
    }

    return (
        <div className="wrapper">

            <div className="text-center mt-4 name">Anmeldung</div>
            <form onSubmit={handleSumit} className="p-3 mt-3">
                <div className="form-field d-flex align-items-center">
                    <label className="far fa-user" htmlFor="tfUsername"></label>
                    <input type="text" id="username" placeholder={"E-Mail/Benutzername"} />
                </div>
                <div className="form-field d-flex align-items-center">
                    <label className="fas fa-key" htmlFor="tfPassword"></label>
                    <input type="text" id="password" placeholder={"Password"}/>
                </div>

                <Link to={"/homepage"} className="text-center fs-6">
                    <button type="submit" className="btn mt-3">Anmelden</button>
                </Link>


                <Link to={"/registration"}>Registrieren</Link>
            </form>
            <Outlet/>
        </div>

    );
};

export default Login;