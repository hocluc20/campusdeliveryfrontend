import React from 'react';
import "./CSSBasicDesigns.css";
import {IUserGetUserID} from "../../common/models/IUserGetUserID";
import {IUserLogin} from "../../common/models/IUserLogin";
import {IUserRegister} from "../../common/models/IUserRegister";
interface LoggedUserField{
    user: IUserRegister;
}

const LoggedUserField:React.FC<LoggedUserField> = ({user}) => {
    return (
        <div className={"divUser"}>
            <strong>{user.firstname} {user.lastname} : {user.username}</strong>
        </div>
    );
};

export default LoggedUserField;