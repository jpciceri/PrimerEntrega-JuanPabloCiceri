import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import productos from "./json/productos.json";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(productos)
            }, 2000);
        })
         
        promesa.then(data => {
            console.log(data);
        })

    }, []);

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col text-center">
                    <div className="alert alert-warning alert-dismissible fade show" role="alert">
                        <ItemCount stock={10} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer;