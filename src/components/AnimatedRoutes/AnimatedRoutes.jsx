import React from "react";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import {Home, Reservation, SignIn} from "../../pages";


const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location}>
        <Route path="/" element={<Home/>} />
        <Route path="/reservations" element={<Reservation />} />
        <Route path="/signin" element={<SignIn/>} />
        </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
