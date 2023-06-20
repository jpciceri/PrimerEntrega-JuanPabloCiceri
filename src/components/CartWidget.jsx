import { Link } from "react-router-dom";
import Cart from "./images/cart.svg";
import { CartContext } from "./CartContext";
import { useContext } from "react";

const CartWidget = () => {
    const {cartTotal} = useContext(CartContext);
    return (
       (cartTotal() > 0) ? <Link type="button" className="btn position-relative" to={"/cart"}>
            <img src={Cart} alt="Carrito"  with={38} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartTotal()}</span>
            </Link> : ""
    
 )
}

export default CartWidget;