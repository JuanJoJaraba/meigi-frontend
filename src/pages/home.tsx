import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from "react";
import "@/app/contenedores/contenedor-principal.css"
import "@/app/globals.css"
import "@/app/contenedores/botonprincipal.css"
import "@/app/contenedores/input_texto.css"
import { useRouter } from "next/navigation";
import Icon from "@/app/assets/imagen";
import Carusel from "@/app/assets/carousel";



export default function HOME() {

  const router = useRouter();

  const [productos, setProductos] = useState([{ nombre: "", precio: 0, descripcion: "", imagen: "", id: 0 }]);

  axios.get("http://localhost:3001/productos")
    .then((response) => {
      setProductos(response.data)
    })

  return (
    <div className="container">
      <nav className="navbar bg-body-tertiary mb-5 mt-3 backdrop-brightness-0">
        <div className="container-fluid">
          <a className="navbar-brand"><Icon /></a>

          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="" aria-label="Search" />
            <button type="button" className="botones3 btn btn-light">Buscar</button>

          </form>
          <ul className="mx-4">
            <div className="dropdown">
              <button className="botones3 btn btn-light mb-3" type="button" onClick={() => { router.push("/login") }}>Iniciar Sesion</button>

            </div>
            <button type="button" className="botones3 btn btn-light" onClick={() => { router.push("/registro") }}>Registrarse</button>
          </ul>
        </div>
        <ul className="menu2 navbar-nav flex flex-row text-justify">
          <li className="nav-item">
            <a className="nav-link mx-4" href="#">Nuevo</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mx-4" href="#">Mas Vendido</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mx-4" href="#">Paletas</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mx-4" href="#">Ojos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mx-4" href="#">Labios</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mx-4" href="#">Colaboraciones</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mx-4" href="#">Cuidado de Piel</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mx-4" href="#">Cuerpo</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mx-5" href="#">Venta</a>
          </li>
        </ul>
      </nav>
      {/* <Carusel></Carusel> */}
      <div className="contenedor3 grande">
        <div className="dropdown">
          <button className="botones6 dropdown-toggle mb-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categorias
          </button>
        </div>
        {productos.map((producto, i) => (
          <div className="home" key={producto.id}>
            <div className="card mt-2">
              <img src={producto.imagen} className="card-img-top" alt="logo"></img>
              <div className="card-body">
                <h3 className="card-title">{producto.nombre}</h3>
                <h4 className="card-subtitle mb-2 text-body-secondary">${producto.precio} COP</h4>
                <p className="card-text">{producto.descripcion}</p>
                <button className="btn1">Agregar al Carrito</button>
              </div>
            </div>
          </div>

        ))}
      </div>
    </div>








  )
}
