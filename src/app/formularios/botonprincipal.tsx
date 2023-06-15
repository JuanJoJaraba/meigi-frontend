import React from "react";
import "../contenedores/botonprincipal.css"

const BotonPrincipal = (props: { texto: string, callBack: Function }) => {
  

    return (

        <button className="boton_pincipal" onClick={function(){props.callBack()}}>{props.texto}</button>

    );

}

export default BotonPrincipal;