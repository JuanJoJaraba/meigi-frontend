"use client";
import 'bootstrap/dist/css/bootstrap.css';
import "../contenedores/contenedor-principal.css";
import InputText from '../formularios/input_texto';
import "../contenedores/input_texto.css"
import React, { useState } from "react";
import Icon from '../assets/imagen';
import BotonPrincipal from '../formularios/botonprincipal';
import axios from 'axios';




export default function Home() {
    const [correo, setCorreo] = useState('')
    const [contrasena, setContrasena] = useState('')
    function handleInput(valor: string, name: string) {
        if (name === "correo") {
            setCorreo(valor)
        } else {
            setContrasena(valor)
        }
    }
    const SessionDataStorage = (e: any) => {

        sessionStorage.setItem("access_token", e);
    };
    const login = async () => {

        axios.post('http://localhost:3001/autenticacion/login', {
            correo: correo,
            contrasena: contrasena
        })
            .then(function (response) {
                console.log(response.data.access_token);
                SessionDataStorage(response.data.access_token)
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (<div className='container'>
        <br />
        <Icon />
        <h1>LOGIN</h1>
        <br />
        <InputText hint="Email" id="correo" type="text" handleInput={handleInput}/>
        <br />
        <InputText hint="Contrasena" id="contrasena" type="password" handleInput={handleInput}/>
        <BotonPrincipal texto='INICIAR SESION' callBack={login} />
        <BotonPrincipal texto='REGISTRARSE' callBack={login}/>
        <br />
        <div className="href">
            <p><a href="registro.html">CREAR CUENTA</a></p>
            <p><a href="/recuperarcontraseña">¿Olvidaste tu contrasena?</a></p>
        </div>
    </div>
    );

}


