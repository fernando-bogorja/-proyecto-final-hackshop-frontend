import global from "../global";
import { clearCart } from "../redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import axios from 'axios'

export default function useMakeOrder() {
    const dispatch = useDispatch();
    const sendOrder = (order) => {
        axios.post(`${global.api}/orders/create`, order).then((res) => {
            console.log(res);
            dispatch(clearCart());
        });
    }

    return { sendOrder };
}