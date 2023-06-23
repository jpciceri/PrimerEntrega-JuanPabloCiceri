import { Link, useParams } from "react-router-dom";

const ThankYou = () => {

    const { orderId } = useParams();

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col text-center">
                    <div className="alert alert-success" role="alert">
                        <h1>Muchas gracias por tu Compra!</h1>
                        <p>Tu Orden de Compra es: <b>{orderId}</b></p>
                        <p><Link to={"/"} className="btn btn-primary">Volver al Inicio</Link></p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ThankYou;
