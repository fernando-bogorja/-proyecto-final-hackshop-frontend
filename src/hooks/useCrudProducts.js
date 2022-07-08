
import * as React from 'react';
import axios from 'axios'
import global from '../global';
import { toastConfig } from '../theme';
import { toast } from 'react-toastify'

export default function useCrudProducts() {
    const [categories, setCategories] = React.useState([]);
    const editProduct = async (product) => {
        await axios.put(`${global.api}/products/update`, product);
        toast("Producto editado correctamente", toastConfig);
    }

    const createProduct = async (product) => {
        await axios.post(`${global.api}/products/create`, product);
        toast("Producto creado correctamente", toastConfig);
    }

    React.useEffect(() => {
        axios.get(`${global.api}/category`)
            .then(res => { setCategories(res.data) }
            ).catch(err => console.log(err));
    });

    return { createProduct, editProduct, categories }
}