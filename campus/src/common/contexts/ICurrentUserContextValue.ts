import {IUserReplyLogin} from "../models/IUserReplyLogin";
import {createContext} from "react";

export interface ICurrentUserContextValue{
    currentUser?: IUserReplyLogin
}

export const CurrentUserContext = createContext<ICurrentUserContextValue>({});