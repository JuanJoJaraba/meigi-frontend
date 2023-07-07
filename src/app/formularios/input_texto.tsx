"use client";

import React from "react";
import "../contenedores/input_texto.css"

export default function InputText (props:{hint:string, type:string, id:string, handleInput:any}) {

    return (

        <input  className="InputText" type={props.type} placeholder={props.hint} id={props.id} name={props.id} onChange={e=>props.handleInput(e.target.value,e.target.name)}/>
        
    )


}

