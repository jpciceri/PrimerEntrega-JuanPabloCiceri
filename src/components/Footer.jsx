import Facebook from "./images/facebook.svg"
import Instagram from "./images/instagram.svg"
import Whatsapp from "./images/whatsapp.svg"
import Youtube from "./images/youtube.svg"

const Footer = () => {
    return (
        <div className="container-fluid bg-info text-dark py-4">
            <div className="row">
                <div className="col">
                    <h5> <b> Seguinos </b></h5>
                    <a href="#" className="me-2"> <img src={Facebook} alt="" width={20} /> </a>
                    <a href="#" className="me-2"> <img src={Instagram} alt="" width={20} /> </a>
                    <a href="#" className="me-2"> <img src={Whatsapp} alt="" width={20} /> </a>
                    <a href="#" className="me-2"> <img src={Youtube} alt="" width={20} /> </a>
                </div>
                <div className="col">
                    <h5><b>Categorías </b></h5>
                    <a href="#" className="text-decoration-none text-dark"> <p>Tecnología </p> </a>
                    <a href="#" className="text-decoration-none text-dark"> <p>Electrodomésticos</p></a>
                    <a href="#" className="text-decoration-none text-dark"> <p>Casa & Jardín</p></a>
                    <a href="#" className="text-decoration-none text-dark"> <p>Rodados</p></a>
                    <a href="#" className="text-decoration-none text-dark"> <p>Deportes & Tiempo Libre</p></a>
                    <a href="#" className="text-decoration-none text-dark"> <p>Bebés & Niños</p></a>
                    <a href="#" className="text-decoration-none text-dark"> <p> Belleza & Salud</p></a>
                </div>
                <div className="col">
                    <h5><b>Institucional</b></h5>
                    <a href="#" className="text-decoration-none text-dark"><p>Empresa</p> </a>
                    <a href="#" className="text-decoration-none text-dark"> <p>Crédito personal</p></a>
                    <a href="#" className="text-decoration-none text-dark"> <p>Electrosale Plus</p></a>
                    <a href="#" className="text-decoration-none text-dark"> <p>Venta Corporativa</p></a>
                    <a href="#" className="text-decoration-none text-dark"><p>Trabajá en Electrosale</p></a>
                    <a href="#" className="text-decoration-none text-dark"> <p>Contacto</p></a>
                </div>
                <div className="col">
                    <h5><b>Legales</b></h5>
                    <a href="#" className="text-decoration-none text-dark"> <p>Términos y condiciones</p></a>
                    <a href="#" className="text-decoration-none text-dark"> <p>Políticas de privacidad</p></a>
                    <a href="#" className="text-decoration-none text-dark" ><p>Políticas de cambio</p></a>
                    <a href="#" className="text-decoration-none text-dark"> <p>Defenza de las y los consumidores</p></a>
                </div>
            </div>
        </div>
    )
}

export default Footer;