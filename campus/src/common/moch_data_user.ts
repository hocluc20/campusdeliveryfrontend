import {IUserGetUserID} from "./models/IUserGetUserID";
import {IUserReplyLogin} from "./models/IUserReplyLogin";

export const moch_data_user : IUserGetUserID[] = [
    {
        username:"emmabauer20",
        firstname:"Emma",
        lastname:"Bauer",
    },
    {
        username:"tobiasschroettner20",
        firstname:"Tobias",
        lastname:"Schroettner",
    },
    {
        username:"lukashochfellner20",
        firstname:"Lukas",
        lastname:"Hochfellner",
    }
]


export const mock_data_userReply : IUserReplyLogin[] = [
    {
        id:1,
        username:"seli",
        email:"edesec20@htl-kaindorf.at",
        userpassword:"asdasd",
        firstname:"Selina",
        lastname:"Edelsbrunnner",
        numberOfDeliveries:12,
        klasse:"chif20",
    }
]

