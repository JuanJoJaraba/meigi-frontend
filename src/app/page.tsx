"use client"

import Home from "@/pages/login"
import { BrowserRouter, Route, Routes } from "react-router-dom"

export default function App() {

  return (

    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Home />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>

  )

};