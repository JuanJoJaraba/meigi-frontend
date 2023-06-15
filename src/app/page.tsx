"use client";
import React, { Children, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./paginas/login";
import RootLayout from './layout';

export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<RootLayout children={undefined} />}>
            <Route index element={<Login />} />
            <Route path="login" element={<Login />} />
    
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
