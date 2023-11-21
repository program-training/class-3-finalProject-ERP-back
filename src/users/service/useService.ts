import { userData } from '../../configuration/TypeUser';
import { getUserByEmail } from '../dall/userDall';
import { addUser } from '../dall/userDall';
export const register = async (user: userData) => {
    console.log("gilad")
    try {
        const users = await getUserByEmail(user.user_name);
        if (!users) {
            const res = await addUser(user)
            return user
        }
        else {
            return Promise.reject(new Error("user is Already exists"))
        }
    } catch (error: any) {
        return Promise.reject(error);
    }
};
