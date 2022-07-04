import { useSelector } from 'react-redux';
import axios from 'axios';
import { useDispatch } from 'react-redux/es/exports';
import { setPayment, setAddress } from '../redux/slices/checkOutSlice';

export default function useCheckout() {
    const dispatch = useDispatch();
    const checkout = useSelector(state => state.checkout);
    const user = useSelector(state => state.user);
    const { address, payment, cart } = checkout;
    const newAddress = { ...address, userId: user.data._id };

    const saveAddress = () => {
        dispatch(setAddress(newAddress));
    }

    const savePayment = () => {
        dispatch(setPayment(payment));
    };

    return [checkout, saveAddress, savePayment];
}