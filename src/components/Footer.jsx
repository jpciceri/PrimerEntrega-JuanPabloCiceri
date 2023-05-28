import Facebook from "./images/facebook.svg"
import Instagram from "./images/instagram.svg"
import Whatsapp from "./images/whatsapp.svg"
import Youtube from "./images/youtube.svg"
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="container-fluid bg-info text-dark py-4">
            <div className="row">
                <div className="col">
                    <h5> <b> Seguinos </b></h5>
                    <Link to={"/#"} className="me-2"> <img src={Facebook} alt="" width={20} /> </Link>
                    <Link to={"/#"} className="me-2"> <img src={Instagram} alt="" width={20} /> </Link>
                    <Link to={"/#"} className="me-2"> <img src={Whatsapp} alt="" width={20} /> </Link>
                    <Link to={"/#"} className="me-2"> <img src={Youtube} alt="" width={20} /> </Link>
                </div>
                <div className="col">
                    <h5><b>Categorías </b></h5>
                    <Link to={"/#"} className="text-decoration-none text-dark"> <p>Tecnología </p> </Link>
                    <Link to={"/#"} className="text-decoration-none text-dark"> <p>Electrodomésticos</p></Link>
                    <Link to={"/#"} className="text-decoration-none text-dark"> <p>Casa & Jardín</p></Link>
                    <Link to={"/#"} className="text-decoration-none text-dark"> <p>Rodados</p></Link>
                    <Link to={"/#"} className="text-decoration-none text-dark"> <p>Deportes & Tiempo Libre</p></Link>
                    <Link to={"/#"} className="text-decoration-none text-dark"> <p>Bebés & Niños</p></Link>
                    <Link to={"/#"} className="text-decoration-none text-dark"> <p> Belleza & Salud</p></Link>
                </div>
                <div className="col">
                    <h5><b>Institucional</b></h5>
                    <Link to={"/#"} className="text-decoration-none text-dark"><p>Empresa</p> </Link>
                    <Link to={"/#"} className="text-decoration-none text-dark"> <p>Crédito personal</p></Link>
                    <Link to={"/#"} className="text-decoration-none text-dark"> <p>Electrosale Plus</p></Link>
                    <Link to={"/#"} className="text-decoration-none text-dark"> <p>Venta Corporativa</p></Link>
                    <Link to={"/#"} className="text-decoration-none text-dark"><p>Trabajá en Electrosale</p></Link>
                    <Link to={"/#"} className="text-decoration-none text-dark"> <p>Contacto</p></Link>
                </div>
                <div className="col">
                    <h5><b>Legales</b></h5>
                    <Link to={"/#"} className="text-decoration-none text-dark"> <p>Términos y condiciones</p></Link>
                    <Link to={"/#"} className="text-decoration-none text-dark"> <p>Políticas de privacidad</p></Link>
                    <Link to={"/#"} className="text-decoration-none text-dark" ><p>Políticas de cambio</p></Link>
                    <Link to={"/#"} className="text-decoration-none text-dark"> <p>Defenza de las y los consumidores</p></Link>
                </div>
            </div>
        </div>
    )
}

export default Footer;