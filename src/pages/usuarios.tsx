import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from "react";
import React from "react";
import "@/app/contenedores/contenedor-principal.css"
import "@/app/globals.css"
import "@/app/contenedores/botonprincipal.css"
import "@/app/contenedores/input_texto.css"
import Icon from "@/app/assets/imagen";
import { AiFillEdit, AiOutlineUserAdd, AiOutlineDelete } from "react-icons/ai";
import router from "next/router";



export default function Usuarios() {

    const [usuarios, setUsuarios] = useState([{ nombres: "", apellidos: "", correo: "", id: 0 }]);

    function traerUsuarios() {
        axios.get("http://localhost:3001/usuarios")
            .then((response) => {
                setUsuarios(response.data)
                console.log(response.data)
            })
    }
    React.useEffect(() => {
        traerUsuarios()
    }, [])

    const table = usuarios.map((usuarios, i) => (
        <tr key={usuarios.id}>

            <td>{usuarios.id}</td>
            <td>{usuarios.nombres}</td>
            <td>{usuarios.apellidos}</td>
            <td>{usuarios.correo}</td>
            <td><div className="contenedor2 d-flex mx-2"><AiFillEdit style={{ fontSize: 25 }} /><br /> <AiOutlineDelete style={{ fontSize: 25 }} /></div>
            </td>

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
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Ver Perfil</a></li>
                                <li><a className="dropdown-item" href="#">Editar datos</a></li>
                                <li><a className="dropdown-item" href="#">Editar Perfil</a></li>
                            </ul>
                        </div>
                        <button type="button" className="botones3 btn btn-light">Cerrar Sesion</button>
                    </ul>
                </div>
                <ul className="menu navbar-nav flex flex-row text-justify">
                    <li className="nav-item">
                        <a className="nav-link mx-5" onClick={() => { router.push("/home") }}>Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mx-5" onClick={() => { router.push("/registro") }}>Registro</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mx-5" onClick={() => { router.push("/usuarios") }}>Usuarios</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mx-5" onClick={() => { router.push("/productos") }}> Productos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mx-5" onClick={() => { router.push("/registroproductos") }}>Registro Productos</a>
                    </li>
                </ul>
            </nav>
            <div className="contenedor2">
                <div className="container grande" >
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>ID(Persona)</th>
                                <th>Nombres</th>
                                <th>Apellidos</th>
                                <th>Correo</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {table}
                        </tbody>
                    </table>

                    <div className="container">
                        <button type="button" className="botones4 btn btn-light mx-5" onClick={()=>{router.push("/registro")}}>AÑADIR</button>
                        <button type="button" className="botones4 btn btn-light" onClick={()=>{router.push("/usuarios")}}>ACTUALIZAR</button>
                        <button type="button" className="botones5 btn btn-light ml-auto" onClick={()=>{router.push("/")}}>Regresar a Inicio</button>

                    </div>
                </div>
            </div>


        </div >


    )

}
