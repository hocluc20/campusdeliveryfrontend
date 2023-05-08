import React, {FormEvent} from 'react';
import {Link, Outlet} from "react-router-dom";
import {IUserRegister} from "../../common/models/IUserRegister";
import axios from "axios";
import "./loginCSS.css"


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

        axios.post("/user/register",JSON.stringify(newUser))
            .catch(error => {
                if(error == 201){
                    console.log("CREATED")
                }else if(error == 406){
                    console.log("ERROR ")
                }else if(error == 405){
                    console.log("Email or username already exist")
                }
            });
    }

    return (
        <div className="wrapper">
            <div className="text-center mt-4 name">Registration</div>
            <form onSubmit={handleSubmit} className="p-3 mt-3">
                <div className="form-field d-flex align-items-center">
                    <label className="far fa-user" htmlFor="tfUsername"></label>
                    <input type="text" id="username" placeholder={"Benutzername"} />
                </div>
                <div className="form-field d-flex align-items-center">
                    <label htmlFor="tfFirstname"></label>
                    <input type="text" id="firstname" placeholder={"Vorname"} />
                </div>
                <div className="form-field d-flex align-items-center">
                    <label htmlFor="tfLastname"></label>
                    <input type="text" id="lastname" placeholder={"Nachname"} />
                </div>
                <div className="form-field d-flex align-items-center">
                    <label htmlFor="tfClass"></label>
                    <input type="text" id="klasse" placeholder={"Jahrgang"} />
                </div>
                <div className="form-field d-flex align-items-center">
                    <label htmlFor="tfEMail"></label>
                    <input type="text" id="email" placeholder={"E-Mail"} />
                </div>
                <div className="form-field d-flex align-items-center">
                    <label htmlFor="tfPassword"></label>
                    <input type="password" id="password" placeholder={"Password"}/>
                </div>

                <Link to={"/login"} className="text-center fs-6">
                    <button type="submit" className="btn mt-3">Registrieren</button>
                </Link>


            </form>


        <Outlet/>


        </div>
    );
};

export default Registration;