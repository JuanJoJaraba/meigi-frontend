import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from "react";
import "@/app/contenedores/contenedor-principal.css"
import "@/app/globals.css"
import "@/app/contenedores/botonprincipal.css"
import "@/app/contenedores/input_texto.css"
import { useRouter } from "next/navigation";
import Icon from "@/app/assets/imagen";
import { AiFillEdit, AiOutlineDelete } from "react-icons/ai";



export default function Productos() {
    const router = useRouter();

    const [productos, setProductos] = useState([{ nombre: "", precio: 0, descripcion: "", id: 0 }]);

    axios.get("http://localhost:3001/productos")
        .then((response) => {
            setProductos(response.data)
        })
        const tabla = productos.map((producto, i) => (
            <tr key={producto.id}>

                <td>{producto.id}</td>
                <td>{producto.nombre}</td>
                <td>{producto.precio}</td>
                <td>{producto.descripcion}</td>
                <td><input type="text" className="producto" /></td>
                <td><div className="contenedor2 d-flex mx-2"><AiFillEdit style={{ fontSize: 25 }} /><br /> <AiOutlineDelete style={{ fontSize: 25 }} /></div></td>
            </tr>
        ))

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
                        <button className="botones3 btn btn-light dropdown-toggle mb-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Perfil
                        </button>
                      
                    </div>
                    <button type="button" className="botones3 btn btn-light">Cerrar Sesion</button>
                </ul>
            </div>
            <ul className="menu navbar-nav flex flex-row text-justify">
                    <li className="nav-item">
                        <a className="nav-link mx-5" onClick={()=>{router.push("/home")}}>Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mx-5" onClick={()=>{router.push("/registro")}}>Registro</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mx-5" onClick={()=>{router.push("/usuarios")}}>Usuarios</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mx-5" onClick={()=>{router.push("/productos")}}> Productos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mx-5" onClick={()=>{router.push("/registroproductos")}}>Registro Productos</a>
                    </li>
                </ul>
        </nav>
        <div className="container">
            <div className="contenedor2 grande">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Referencia</th>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Deescripcion</th>
                            <th>Agregar descuento (%)</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tabla}
                    </tbody>
                </table>

                <div className="container">
                        <button type="button" className="botones4 btn btn-light mx-5" onClick={()=>{router.push("/registroproductos")}}>AÑADIR</button>
                        <button type="button" className="botones4 btn btn-light" onClick={()=>{router.push("/productos")}}>ACTUALIZAR</button>
                        <button type="button" className="botones5 btn btn-light ml-auto" onClick={()=>{router.push("/")}}>Regresar a Inicio</button>

                    </div>
            </div>
        </div>

        </div>


    )

}

