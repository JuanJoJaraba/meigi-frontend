"use client";

import React from "react";
import '../contenedores/botonprincipal.css';

const Botones = (props: { texto: string, callBack: Function }) => {
  

    return (

        <button className="boton2" onClick={function(){props.callBack()}}>{props.texto}</button>
        

    );

}

export default Botones;