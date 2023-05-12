import {IUserReplyLogin} from "../models/IUserReplyLogin";
import {createContext} from "react";

export interface ICurrentUserContextValue{
    currentUser: IUserReplyLogin
    setCurrentUser: (currUser:IUserReplyLogin) => void
}

function setCurrentUser(currUser: IUserReplyLogin) {
    console.log("Test");
}

export const CurrentUserContext = createContext<ICurrentUserContextValue>({currentUser:{
        id:1,
        username:"seli",
        email:"edesec20@htl-kaindorf.at",
        userpassword:"pauliii",
        firstname:"selina",
        lastname:"edelsbrunner",
        numberOfDeliveries:5,
        klasse:"chif20",
    }, setCurrentUser: ((currUser) => setCurrentUser(currUser))});

