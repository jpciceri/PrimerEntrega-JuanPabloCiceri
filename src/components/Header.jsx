import ElectroSale from "./images/electrosale.png";
import NavBar from "./NavBar";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="container-fluid">
            <div className="row bg-info">
                <div className="col-md-4">
                    <Link to={"/"}> <img src={ElectroSale}  alt={"Icono Electrosale"} width={100} /> </Link>
                </div>
                <div className="col-md-4">
                    <nav className="navbar bg-body-info">
                        <div className="container-fluid">
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Burscar"/>
                                    <button className="btn btn-outline-success " type="submit">Buscar</button>
                            </form>
                        </div>
                    </nav>
                </div>
                <div className="col-md-4 text-end">
                    <Link to={"/#"} className="text-light text-decoration-none">Super Ofertas </Link> |  <Link to={"/#"} className="text-light text-decoration-none">Iniciar Sesión </Link>
                </div>
            </div>
            <div className="row p-3">
                <div className="col md-4 ">
                </div>
                <div className="col md-4 text-center">
                    <NavBar />
                </div>
                <div className="col md-4 text-end">
                    <CartWidget />
                </div>
            </div>
        </div>
    )
}

export default Header;