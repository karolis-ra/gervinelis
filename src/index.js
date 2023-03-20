import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./state/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/home/home";
import { AboutUs } from "./pages/about/aboutus";
import { Cayaks } from "./pages/cayaks/cayaks";
import { Houses } from "./pages/houses/houses";

import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apiemus" element={<AboutUs />} />
          <Route path="/baidares" element={<Cayaks />} />
          <Route path="/apgyvendinimas" element={<Houses />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
