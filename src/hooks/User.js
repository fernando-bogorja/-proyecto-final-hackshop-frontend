import {
    setUser,
    logoutUser,
    registerUser,
    addAddress
} from '../redux/slices/userSlice';
import global from '../global';
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import jwt_decode from "jwt-decode";

export default function useUserHook() {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    const handleSetUser = user => {
        axios.post(`${global.api}/user/login`, user).then(res => {
            console.log(res.data);
            dispatch(setUser({ token: res.data.token, user: res.data.data.user }));
        });
    }

    const handleSignup = user => {
        axios.post(`${global.api}/user/register`, user).then(res => {
            dispatch(registerUser({ token: res.data.data.token, user: res.data.data.user }));
        });
    }

    const handleAddAddress = address => {
        axios.post(`${global.api}/address/create`, address).then(res => {
            dispatch(addAddress());
        });
    }

    const handleLogoutUser = () => {
        dispatch(logoutUser());
    }

    return [user, handleSetUser, handleLogoutUser, handleSignup, handleAddAddress];
}