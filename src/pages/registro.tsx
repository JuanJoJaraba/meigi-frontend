"use client";
import 'bootstrap/dist/css/bootstrap.css';
import InputText from '../app/formularios/input_texto';
import React, { useState } from "react";
import Icon from '../app/assets/imagen';
import axios from 'axios';
import Swal from 'sweetalert2';
import Botones from '@/app/formularios/botones';
import "@/app/contenedores/contenedor-principal.css"
import "@/app/globals.css"
import "@/app/contenedores/botonprincipal.css"
import "@/app/contenedores/input_texto.css"






export default function REGISTRO() {

    const [nombres, setNombres] = useState('')
    const [apellidos, setApellidos] = useState('')
    const [correo, setCorreo] = useState('')
    const [contrena, setContrasena] = useState('')
    const [repecontrena, setRepetirContrasena] = useState('')

    const handleNombre = (e: string) => {
        setNombres(e)
    }
    const handleApellido = (e: string) => {
        setApellidos(e)
    }
    const handleEmail = (e: string) => {
        setCorreo(e)
    }
    const handleContrasena = (e: string) => {
        setContrasena(e)
    }
    const handleRepetirContrasena = (e: string) => {
        setRepetirContrasena(e)
    }

    const registrar = () => {

        axios.post("http://localhost:3001/usuarios", {

            nombres: nombres,
            apellidos: apellidos,
            correo: correo,
            contrena: contrena,
            repecontrena: repecontrena,
        }).then((response) => {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Te haz registrado exitosamente',
                showConfirmButton: false,
                timer: 1500
            })
        })

    }

    const botonregistrar = () => {

    }


    return (<div className='container3'>
        <br />
        <a className="navbar-brand" >
            <Icon />
        </a>
        <form method="post">
            <h1>REGISTRARSE</h1>
            <br />
            <InputText hint="Nombres" id="nombre" type="text" handleInput={handleNombre} />
            <br />
            <InputText hint="Apellidos" id="apellido" type="text" handleInput={handleApellido} />
            <br />
            <InputText hint="Email" id="email" type="email" handleInput={handleEmail} />
            <br />
            <InputText hint="Contraseña" id="contrasena" type="password" handleInput={handleContrasena} />
            <br />
            <InputText hint="Repetir Contraseña" id="recontrasena" type="password" handleInput={handleRepetirContrasena} />
            <br />
        </form>
        <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label className="form-check-label" htmlFor="flexCheckDefault">  Acepta terminos y condiciones
            </label>
        </div>

        <Botones texto='CREAR MI CUENTA' callBack={registrar} />
        <Botones texto='CANCELAR' callBack={botonregistrar} />
        <br />
        <div className='href-registro'>
            <p>Regresar a <a href="/">Iniciar Sesion</a></p>

        </div>



    </div>
    );








}

