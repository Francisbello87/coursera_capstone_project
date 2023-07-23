import React from "react";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import {Confirmation, Home, Reservation, SignIn, SignUp} from "../../pages";


const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location}>
        <Route path="/" element={<Home/>} />
        <Route path="/reservations" element={<Reservation />} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/confirmationpage" element={<Confirmation/>} />
        </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
