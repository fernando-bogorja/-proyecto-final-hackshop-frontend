import axios from "axios";
import global from "../global";
//import { toast } from "react-toastify";

export default function useDeleteOrder() {
  /*
  const deleteOrder = async (id) => {
    axios.delete(`${global.api}/orders/delete/`, {
      params: { id },
    });
    toast.info("Orden Borrada");
    console.log("hakuna matata");
  };
  */
  const deleteOrder = async (id) => {
    const deleted = await axios
      .delete(`${global.api}/orders/delete`, {
        id: id,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response);
      });
    console.log("id", "#" + id + "#");
  };
  return deleteOrder;
}
