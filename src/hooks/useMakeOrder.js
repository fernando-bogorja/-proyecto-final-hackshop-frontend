import * as React from 'react'
import global from "../global";
import { clearCart } from "../redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addOrder } from "../redux/slices/userSlice";
import axios from 'axios'

export default function useMakeOrder() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const sendOrder = (order) => {
        axios.post(`${global.api}/orders/create`, order).then(res => {
            navigate(`/thanks/${res.data.order._id}`);
            dispatch(addOrder(res.data.order));
        })
    }

    const clear = () => {
        dispatch(clearCart());
    }

    return { sendOrder, clear };
}