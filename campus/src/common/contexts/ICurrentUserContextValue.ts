import {IUserReplyLogin} from "../models/IUserReplyLogin";
import {createContext} from "react";

export interface ICurrentUserContextValue{
    currentUser?: IUserReplyLogin
    setCurrentUser?: (currUser:IUserReplyLogin) => void
}

export const CurrentUserContext = createContext<ICurrentUserContextValue>({

});

e