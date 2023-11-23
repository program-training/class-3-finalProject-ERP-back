// import { getUserByEmail, addUser } from "../dal";
// import { User, UserFromClient } from "../../configuration/Userinterface";
import jwt, { JwtPayload } from "jsonwebtoken";
import { getUserByEmail } from "../users/dall/userDall";
import { userData } from "../configuration/TypeUser";
import { productUpdate } from "../configuration/TypeUser";
import { secretKey } from "../configuration/jwt";


export const getToken = async (user: userData) => {
    try {
        const usersFromDB = await getUserByEmail(user.user_name)
        if (!usersFromDB) {
            return Promise.reject(new Error("user is not found"))
        }
        if (usersFromDB.password !== user.password) {
            return Promise.reject(new Error("The password is incorrect!"))
        }
        const token = jwt.sign({ user }, secretKey, { expiresIn: '30d' });
        return token;
    } catch (error) {
        return Promise.reject(error);
    }
};

