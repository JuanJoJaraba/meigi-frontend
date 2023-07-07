"use client"
import Login from "@/pages/login";
import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HOME from "@/pages/home";
import REGISTRO from "@/pages/registro";
import Productos from "@/pages/productos";
import REGISTROPRODUCTOS from "@/pages/registroproductos";
import Usuarios from "@/pages/usuarios";








export default function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HOME />} />
        <Route path="/registro" element={<REGISTRO />} />
        <Route path="/productos" element={<Productos/> } />
        <Route path="/usuarios" element={<Usuarios/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/registroproductos" element={<REGISTROPRODUCTOS/>} />
      </Routes>
    </BrowserRouter>
  )
}








