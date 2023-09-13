import {IUserComplete} from "../models/IUserComplete";
import {createContext} from "react";

export interface ICurrentUserContextValue{
    currentUser: IUserComplete
    setCurrentUser: (currUser:IUserComplete) => void
}

function setCurrentUser(currUser: IUserComplete) {
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

