import React, {FormEvent, useContext, useState} from 'react';
import {Link, Outlet, useNavigate} from "react-router-dom";
import Registration from "./Registration";
import {IUserLogin} from "../../common/models/IUserLogin";
import axios from "axios";
import {IUserComplete} from "../../common/models/IUserComplete";
import "./loginCSS.css"
import {CurrentUserContext, ICurrentUserContextValue} from "../../common/contexts/ICurrentUserContextValue";


const Login = () => {
    const contextUser: ICurrentUserContextValue = useContext(CurrentUserContext);
    // const [currentUser, setCurrentUser] = contextUser;
    // console.log(contextUser);

    const navigate = useNavigate();

    const handleSumit=(e:FormEvent<HTMLFormElement>) =>{
        e.preventDefault();

        const userLogin:IUserLogin = {
            username:e.currentTarget.username.value,
            userPassword:e.currentTarget.password.value
        }

        console.log(JSON.stringify(userLogin));

        axios.post("http://localhost:3001/user/login",userLogin)
            .then(response =>{

                const userLoginBack:IUserComplete = {
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
                    contextUser.setCurrentUser(userLoginBack);

                navigate("/homepage");

            })
            .catch(error => {
                if(error === 406){
                    console.log("User does not exist")
                }else if(error === 405){
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
                    <input type="password" id="password" placeholder={"Password"}/>
                </div>

                    <button type="submit" className="btn mt-3">Anmelden</button>



                <Link to={"/registration"}>Registrieren</Link>
            </form>
            <Outlet/>
        </div>

    );
};

export default Login;