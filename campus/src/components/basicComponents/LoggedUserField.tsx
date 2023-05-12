import React, {useContext} from 'react';
import "./CSSBasicDesigns.css";
import {IUserGetUserID} from "../../common/models/IUserGetUserID";
import {IUserLogin} from "../../common/models/IUserLogin";
import {IUserRegister} from "../../common/models/IUserRegister";
import {IUserReplyLogin} from "../../common/models/IUserReplyLogin";
import {CurrentUserContext, ICurrentUserContextValue} from "../../common/contexts/ICurrentUserContextValue";
interface LoggedUserField{
    // user: IUserReplyLogin;
}

const LoggedUserField:React.FC<LoggedUserField> = () => {
    const user: ICurrentUserContextValue = useContext(CurrentUserContext);

    return (
        <div className={"divUser"}>
            <strong>{user.currentUser?.firstname} {user.currentUser?.lastname} : {user.currentUser?.username}</strong>
        </div>
    );
};

export default LoggedUserField;