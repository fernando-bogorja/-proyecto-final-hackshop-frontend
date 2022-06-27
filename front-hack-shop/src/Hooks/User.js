import {
    setUser,
    logoutUser
} from '../redux/slices/userSlice';
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

export default function useUserHook() {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    const handleSetUser = user => {
        axios.post("http://localhost:3001/api/user/login", user).then(res => {
            dispatch(setUser({ token: res.data.data.token }));
        });
    }

    const handleLogoutUser = () => {
        dispatch(logoutUser());
    }

    return [user, handleSetUser, handleLogoutUser];
}