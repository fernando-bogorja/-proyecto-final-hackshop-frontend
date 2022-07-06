import {
  setUser,
  logoutUser,
  registerUser,
  addAddress,
  handleError
} from "../redux/slices/userSlice";
import global from "../global";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

export default function useUserHook() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleSetUser = (user) => {
    axios.post(`${global.api}/user/login`, user).then((res) => {
      switch (res.status) {
        case 200:
          dispatch(setUser({ token: res.data.data.token, user: res.data.data.user }));
          break;
        default:
          dispatch(handleError("Error al iniciar sesión"));
          break;
      }
    }).catch((err) => {
      console.log(err);
      dispatch(handleError("Error al iniciar sesión"));
    })
  };

  const handleSignup = (user) => {
    axios.post(`${global.api}/user/register`, user).then((res) => {
      dispatch(
        registerUser({ token: res.data.data.token, user: res.data.data.user })
      );
    }).catch(() => {
      dispatch(handleError("Error al registrar usuario"));
    })
  };

  const handleAddAddress = (address) => {
    axios.post(`${global.api}/address/create`, address).then((res) => {
      dispatch(addAddress());
    }).catch(() => {
      dispatch(handleError("Error al agregar dirección"));
    });
  };

  const handleLogoutUser = () => {
    dispatch(logoutUser());
  };

  return [
    user,
    handleSetUser,
    handleLogoutUser,
    handleSignup,
    handleAddAddress,
  ];
}
