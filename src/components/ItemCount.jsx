import { useEffect, useState } from "react";

const ItemCount = ({stock}) => {
    const [items, setItems] = useState(1);
    const [itemStock, setItemStock] = useState(stock);

    const incrementarStock = () => {
        if (items < itemStock) {
           setItems(items + 1);
        }
    }
    const decrementarStock = () => {
        if (items > 0) {
            setItems(items - 1);
         }
    }
    const onAdd = () => {
        if (items <= itemStock){
            setItemStock(itemStock - items);
            setItems(1);
        console.log("seleccionaste:" + items + "productos al carrito.\n Te quedan: " + itemStock + "productos disponibles")
        }
    }

    useEffect(() => {
        setItemStock(stock);
    }, [stock]);


    return (

        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-info" onClick={decrementarStock}>-</button>
                        <button type="button" className="btn btn-info">{items}</button>
                        <button type="button" className="btn btn-info" onClick={incrementarStock}>+</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col text-center my-1">
                    <button type="button" className="btn btn-info" onClick={onAdd}>Agregar al Carrito</button>

                </div>
            </div>
        </div>



    )
}

export default ItemCount;
