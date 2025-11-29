import React from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import Background from "./components/Background";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

import Home from "./components/Home";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";

const App = () => {
  return (
    <section className="flex justify-center mx-auto w-full max-w-[1250px] overflow-y-hidden">
      <Background />
      <section className="p-5 flex flex-col place-content-center items-start gap-5 lg:grid lg:grid-cols-3 lg:auto-rows-auto">
        <NavBar />
        <SideBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </section>
    </section>
  );
};

export default App;
