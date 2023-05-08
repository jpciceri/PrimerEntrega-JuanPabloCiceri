const NavBar = () => {
    return (
<ul className="nav nav-pills">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#">Casa y Jardín</a>
  </li>
  <li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Tecnología</a>
    <ul className="dropdown-menu">
      <li><a className="dropdown-item" href="#">Notebooks</a></li>
      <li><a className="dropdown-item" href="#">Placas de Videos</a></li>
      <li><a className="dropdown-item" href="#">TV Led y Smart TV</a></li>
      <li><a className="dropdown-item" href="#">Accesorios</a></li>
    </ul>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Electrodomésticos</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#" >Rodados</a>
  </li>
</ul>
  
    )
}

export default NavBar;