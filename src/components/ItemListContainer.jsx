import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, where, query} from "firebase/firestore";
import Loading from "./Loading";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const q = id ? query(itemsCollection, where("categoria","==",id)) : itemsCollection;
        getDocs(q).then(resultado => {
            if (resultado.size > 0) {
                setItems(resultado.docs.map(producto => ({id:producto.id, ...producto.data()})));
                setLoading(false);
            } else {
                console.error("Error, no hay productos encontrados!")
            }
            });
        }, [id]);


    return (
        <div className="container my-5">
            <div className="row">
               {loading ? <Loading /> : <ItemList items={items} />}
            </div>
        </div>
    )
}

export default ItemListContainer;