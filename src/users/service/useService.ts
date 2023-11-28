import { userData } from '../../configuration/Type';
import { getUserByEmail } from '../dall/userDall';
import { addUser } from '../dall/userDall';



export const register = async (user: userData) => {
    try {
        const users = await getUserByEmail(user.user_name);
        if (!users) {
            const res = await addUser(user)
            return res
        }
        else {
            return Promise.reject(new Error("user is Already exists"))
        }
    } catch (error) {
        return Promise.reject(error);
    }
};
