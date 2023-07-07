"use client";
import 'bootstrap/dist/css/bootstrap.css';
import InputProducto from "../app/formularios/input_productos"
import React, { useState } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';
import Botones from '@/app/formularios/botones';
import "@/app/contenedores/contenedor-principal.css"
import "@/app/globals.css"
import "@/app/contenedores/botonprincipal.css"
import "@/app/contenedores/input_texto.css"
import Icon from "@/app/assets/imagen";
import router from 'next/router';




export default function REGISTROPRODUCTOS() {

    const [nombres, setNombres] = useState('')
    const [precio, setPrecio] = useState('')
    const [imagen, setImagen] = useState('')
    const [descripcion, setDescripcion] = useState('')


    const handleNombre = (e: string) => {
        setNombres(e)
    }
    const handlePrecio = (e: string) => {
        setPrecio(e)
    }
    const handleImagen = (e: string) => {
        setImagen(e)
    }
    const handleDescripcion = (e: string) => {
        setDescripcion(e)
    }


    const registrarproducto = () => {

        axios.post("http://localhost:3001/productos", {

            nombre: nombres,
            precio: precio,
            imagen: imagen,
            descripcion: descripcion,

        }).then((response) => {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Haz registrado producto nuevo',
                showConfirmButton: false,
                timer: 1500
            })
        })

    }


    return (<div className='container'>
        <nav className="navbar bg-body-tertiary mb-5 mt-3 backdrop-brightness-0">
            <div className="container-fluid">
                <a className="navbar-brand"><Icon /></a>
                <button type="button" className="botones7 btn btn-light" onClick={() => { router.push("/") }}>HOME</button>
                <button type="button" className="botones7 btn btn-light" onClick={() => { router.push("/productos") }}>PRODUCTOS</button>
                <button type="button" className="botones7 btn btn-light" onClick={() => { router.push("/usuarios") }}>USUARIOS</button>
                
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
        </nav>

    <div className='container4'>
    
        <form method="post">
            <h5>Añadir Producto</h5>
            <br />
            <InputProducto hint="Nombre del Producto" id="nombre" type="text" handleInput={handleNombre} />
            <br />
            <InputProducto hint="Precio" id="apellido" type="text" handleInput={handlePrecio} />
            <br />
            <InputProducto hint="Link de la Imagen" id="imagen" type="text" handleInput={handleImagen} />
            <br />
            <InputProducto hint="Descripcion" id="descripcion" type="textarea" handleInput={handleDescripcion} />
            <br />

        </form>

        <Botones texto='CREAR NUEVO PRODUCTO' callBack={registrarproducto} />
        <button className="boton_principal" onClick={() => { router.push("/") }}>CANCELAR</button>
        <br />

        </div>



    </div>
    );








}

