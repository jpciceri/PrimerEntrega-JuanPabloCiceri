import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
<ul className="nav nav-pills">
  <li className="nav-item">
    <NavLink className="nav-link active" aria-current="page" to={"/category/casayjardin"}>Casa y Jardín</NavLink>
  </li>
  <li className="nav-item dropdown">
    <NavLink className="nav-link dropdown-toggle" data-bs-toggle="dropdown" to={"/category/tecnologia"} role="button" aria-expanded="false">Tecnología</NavLink>
    <ul className="dropdown-menu">
      <li><NavLink className="dropdown-item" to={"/category/tecnologia"}>Notebooks</NavLink></li>
      <li><NavLink className="dropdown-item" to={"/category/tecnologia"}>Placas de Videos</NavLink></li>
      <li><NavLink className="dropdown-item" to={"/category/tecnologia"}>TV Led y Smart TV</NavLink></li>
      <li><NavLink className="dropdown-item" to={"/category/tecnologia"}>Accesorios</NavLink></li>
    </ul>
  </li>
  <li className="nav-item">
    <NavLink className="nav-link" to={"/category/electrodomesticos"}>Electrodomésticos</NavLink>
  </li>
  <li className="nav-item">
    <NavLink className="nav-link" to={"/category/rodados"} >Rodados</NavLink>
  </li>
</ul>
  
    )
}

export default NavBar;