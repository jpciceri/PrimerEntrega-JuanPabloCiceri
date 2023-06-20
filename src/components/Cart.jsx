import { CartContext } from "./CartContext";
import { useContext } from "react";
import trash from "./images/trash.svg";

const Cart = () => {
    const { cart, removeItem, clear, cartTotal, sumTotal } = useContext(CartContext);

    if (cartTotal() === 0) {
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col text-center">
                        <div className="alert alert-danger my-5" role="alert">No se encontraron productos en el Carrito!</div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col text-center">
                    <h1>Productos Seleccionados</h1>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td colSpan={4}>&nbsp;</td>
                                <td><button className="btn btn-light" onClick={() => { clear() }} title="Vaciar Carrito">Vaciar el Carrito</button></td>


                            </tr>
                            {
                                cart.map(item => (
                                    <tr key={item.id}>
                                        <td> <img src={item.imagen} alt={item.titulo} width={80} /></td>
                                        <td>{item.titulo}</td>
                                        <td>Cantidad {item.quantity}  </td>
                                        <td>Precio unidario ${item.precio}</td>
                                        <td>= ${item.quantity * item.precio}</td>
                                        <td><button className="btn btn-light" onClick={() => { removeItem(item.id) }}><img src={trash} alt="Eliminar" width={30} /></button></td>
                                    </tr>
                                ))
                            }
                            <tr>
                                <td colSpan={3}>&nbsp;</td>
                                <td>Total a Pagar</td>
                                <td>= ${sumTotal()}</td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart;