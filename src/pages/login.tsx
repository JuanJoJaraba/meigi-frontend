"use client";
import 'bootstrap/dist/css/bootstrap.css';
import InputText from '../app/formularios/input_texto';
import React, { useState } from "react";
import Icon from '../app/assets/imagen';
import BotonPrincipal from '../app/formularios/botonprincipal';
import axios from 'axios';
import { useRouter } from "next/navigation";
import "@/app/contenedores/contenedor-principal.css"
import "@/app/globals.css"
import "@/app/contenedores/botonprincipal.css"
import "@/app/contenedores/input_texto.css"
import { Link } from 'react-router-dom';




export default function Login() {
  const router = useRouter();
  //  React.useEffect(()=>{
  //    if (sessionStorage.getItem("token")!==undefined){
  //      router.push("/productos")
  //    }

  //  })
  const [correo, setCorreo] = useState('')
  const [contrasena, setContrasena] = useState('')

  function handleInput(valor: string, name: string) {
    if (name === "correo") {
      setCorreo(valor)
    } else {
      setContrasena(valor)
    }
  }

  const SessionDataStorage = (valor: string, name:string) => {
    sessionStorage.setItem(name, valor);
  };


  const login = async () => {
    axios.post(`http://localhost:3001/autenticacion/login`, {
      correo: correo,
      contrasena: contrasena
    })
      .then(function (response) {
        SessionDataStorage(response.data.access_token, "token")
        SessionDataStorage(response.data.nombre, "nombre")
        router.push("/usuarios")
      })
      .catch(function (error) {

      });
  }
  return (<div className="container2">
    <br />
    <a className="navbar-brand">
      <Icon />
    </a>
    <h1>LOGIN</h1>
    <br />
    <InputText hint="Email" id="correo" type="text" handleInput={handleInput} />
    <br />
    <InputText hint="Contrasena" id="contrasena" type="password" handleInput={handleInput} />
    <br />
    <BotonPrincipal texto='INICIAR SESION' callBack={login} />
    <button className="boton_principal" onClick={()=>{router.push("/")}}>CANCELAR</button>
    <div className='href'>
    <a href="/registro">CREAR CUENTA</a>
    <a href="#">¿Has olvidado la cuenta?</a>
    </div>



  </div>
  );

}


