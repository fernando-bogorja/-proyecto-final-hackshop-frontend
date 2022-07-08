import axios from "axios";
import global from "../global";
import { toast } from "react-toastify";
import { toastConfig } from "../theme";
import useGetOrders from "./useGetOrders";

export default function useDeleteOrder() {
  const [orders] = useGetOrders();
  return async function (id) {
    //The id is pass throught the body of the request
    const res = await axios.delete(`${global.api}/orders/delete`, {
      data: {
        id: id
      }
    });
    window.location.reload();
    if (res.data.message) return toast(res.data.message, toastConfig);

    return null;
  }
}
