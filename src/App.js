import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RouteEnums from "./RouteEnums";
import HomePage from "./Components/Pages/HomePage";
import ContactPage from "./Components/Pages/ContactPage";
import AnimalsPage from "./Components/Pages/AnimalsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RouteEnums.HOME} element={<HomePage />} />
        <Route path={RouteEnums.CONTACT} element={<ContactPage />} />
        <Route path={RouteEnums.ANIMALS} element={<AnimalsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
