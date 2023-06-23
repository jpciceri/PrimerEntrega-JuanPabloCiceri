import { useState } from "react";
import { CartContext } from "./CartContext";
import { useContext } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const Checkout = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("");
    const { cart, sumTotal } = useContext(CartContext);

    const generarOrden = () => {
        if (nombre.length === 0) {
            return false;
        }
        if (email.length === 0) {
            return false;
        }
        if (telefono.length === 0) {
            return false;
        }

        const buyer = { name: nombre, phone: telefono, email: email };
        const items = cart.map(item => ({ id: item.id, title: item.titulo, price: item.precio }))
        const fecha = new Date();
        const date = `${fecha.getDate()}-${fecha.getMonth() + 1}-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}`
        const total = sumTotal();
        const order = { buyer: buyer, items: items, date: date, total: total };
        console.log(order);


        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then(resultado => {
            setOrderId(resultado.id);
        })
            .catch(resultado => {
                console.log("Error! No se pudo realizar la compra!")
            })
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-4 offset-md-1">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Nombre</label>
                            <input type="text" className="form-control" onInput={(e) => { setNombre(e.target.value) }} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" onInput={(e) => { setEmail(e.target.value) }} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Teléfono</label>
                            <input type="number" className="form-control" onInput={(e) => { setTelefono(e.target.value) }} />
                        </div>
                        <button type="button" className="btn btn-success" onClick={generarOrden}>Generar Orden</button>
                    </form>
                </div>
                <div className="col-md-6 offset-md-1">
                    <table className="table table-bordered">
                        <tbody>
                            {
                                cart.map(item => (
                                    <tr key={item.id}>
                                        <td> <img src={item.imagen} alt={item.titulo} width={80} /></td>
                                        <td>{item.titulo}</td>
                                        <td>Cantidad {item.quantity}  </td>
                                        <td>Precio unidario ${item.precio}</td>
                                        <td>= ${item.quantity * item.precio}</td>
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
            <div className="row">
                <div className="col text-center my-5">
                    {orderId ? <div class="alert alert-primary" role="alert">
                        <h1>Muchas gracias por tu Compra!</h1>
                        <p>Tu Orden de Compra es: <b>{orderId}</b></p>
                    </div> : ""}
                </div>
            </div>
        </div>
    )
}

export default Checkout;
