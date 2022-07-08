import axios from "axios";
import { useState, useEffect } from "react";
import global from "../global";

export default function useGetOrders() {
  const [orders, setOrders] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get(`${global.api}/orders`);
      setOrders(response.data.orders);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  return [orders, isLoading];
}
