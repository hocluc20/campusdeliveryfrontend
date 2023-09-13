import {IUserGetNamesFromID} from "./models/IUserGetNamesFromID";
import {IUserComplete} from "./models/IUserComplete";

export const moch_data_user : IUserGetNamesFromID[] = [
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


export const mock_data_userReply : IUserComplete[] = [
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

