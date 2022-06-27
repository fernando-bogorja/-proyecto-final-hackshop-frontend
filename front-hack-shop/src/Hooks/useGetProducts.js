import axios from "axios";
import { useState, useEffect } from "react";

export default function useGetProducts() {
    const [products, setProducts] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const products = await axios.get("http://localhost:3001/api/products");
            setProducts(products.data);
            setLoading(false);
        };
        const fetchCategories = async () => {
            const categories = await axios.get("http://localhost:3001/api/category/");
            setCategories(categories.data);
            setLoading(false);
        };
        fetchProducts();
        fetchCategories();
    }, []);

    return [products, categories, isLoading];
}