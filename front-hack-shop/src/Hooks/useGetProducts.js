import axios from "axios";
import { useState, useEffect } from "react";

export default function useGetProducts() {
    const [products, setProducts] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            const products = await axios.get("http://localhost:3001/api/products");
            setProducts(products.data);
            setLoading(false);
        };
        fetchProducts();
    });

    return [products, isLoading];
}