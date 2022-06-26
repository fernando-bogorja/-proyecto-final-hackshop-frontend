import {
    setUser,
    logoutUser
} from '../redux/slices/userSlice';
import { useDispatch, useSelector } from "react-redux";

export default function useUserHook() {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    const handleSetUser = user => {
        dispatch(setUser({
            user: user.user,
            token: user.token,
        }));
        console.log("Logged in", user);
    }

    const handleLogoutUser = () => {
        dispatch(logoutUser());
    }

    return [user, handleSetUser, handleLogoutUser];
}