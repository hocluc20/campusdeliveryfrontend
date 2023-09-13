import React, {useContext} from 'react';
import "./CSSBasicDesigns.css";
import {IUserGetNamesFromID} from "../../common/models/IUserGetNamesFromID";
import {IUserLogin} from "../../common/models/IUserLogin";
import {IUserRegistrationData} from "../../common/models/IUserRegistrationData";
import {IUserComplete} from "../../common/models/IUserComplete";
import {CurrentUserContext, ICurrentUserContextValue} from "../../common/contexts/ICurrentUserContextValue";
interface LoggedUserField{
    // user: IUserComplete;
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