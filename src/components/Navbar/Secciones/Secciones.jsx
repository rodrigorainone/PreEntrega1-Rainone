import { Link } from "react-router-dom";
const Secciones = () => {
    return (
        <>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page"  to={"/"}>TUKY INNOVATION</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/contacto"}>Contacto</Link>
            </li>
        </>
    );
}

export default Secciones;
