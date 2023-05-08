import Cart from "./images/cart.svg"
const CartWidget = () => {
    return (
        <div>
            <button type="button" className="btn position-relative">
                <a href="#"> <img src={Cart} alt="carrito" width={30} /> </a>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                 1 
                </span>
            </button>

        </div>
    )
}

export default CartWidget;