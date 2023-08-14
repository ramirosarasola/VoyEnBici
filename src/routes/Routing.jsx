import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { Achievements } from "../components/pages/achievements/Achievements";
import { Contact } from "../components/pages/contact/Contact";
import { HowToInvolve } from "../components/pages/how-to-involve/HowToInvolve";
import { Mision } from "../components/pages/mision/Mision";
import { Layout } from "../layout/Layout";
import { Home } from "../components/pages/home/Home";
import  Donation  from "../components/pages/donation/Donation";

export const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Layout */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/home" />} />
          </Route>

          {/* Pages */}
          <Route path="/" element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/mision" element={<Mision />} />
            <Route path="/como-puedo-involucrarme" element={<HowToInvolve />} />
            <Route path="/logros" element={<Achievements />} />
            <Route path="/donacion" element={<Donation />} />
            <Route path="/contacto" element={<Contact />} />
          </Route>

          {/* Not Found */}
          <Route path="*" element={<h1> Pagina no encontrada. </h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
