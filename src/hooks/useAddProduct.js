import axios from "axios";
import global from "../global";
import { toast } from "react-toastify";
import { toastConfig } from "../theme";

export default function useAddProduct() {
  const [orders, setOrders] = useState([]);

  return async function (product) {
    const res = await axios.post(`${global.api}/products/create`, {
      data: {
        name: name,
        price: price,
        made_in: madeIn,
        stock: stock,
        description: description,
        images: image,
      },
    });
    window.location.reload();
    if (res.data.message) return toast(res.data.message, toastConfig);

    return null;
  };
}
