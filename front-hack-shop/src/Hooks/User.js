import {
    setUser,
    logoutUser
} from '../redux/slices/userSlice';
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import jwt_decode from "jwt-decode";

export default function useUserHook() {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    const handleSetUser = user => {
        axios.post("http://localhost:3001/api/user/login", user).then(res => {
            dispatch(setUser({ token: res.data.data.token, user: res.data.data.user }));
        });
    }

    const handleLogoutUser = () => {
        dispatch(logoutUser());
    }

    return [user, handleSetUser, handleLogoutUser];
}