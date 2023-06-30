import React from "react";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
// import { Home, SignIn, Contact, Blog, Verify } from "../container";
// import Protected from "./Protected";
import {Home, Reservation} from "../pages";
// import Reservation from "../pages/Reservation/Reservation";


const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location}>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/about" element={<SignIn />} />
        <Route path="/menu" element={<Contact />} /> */}
        <Route path="/reservations" element={<Reservation />} />
        {/* <Route path="/order-online" element={<Blog />} />
        <Route path="/login" element={<Blog />} /> */}
        {/* <Route
          path="/verification"
          element={
            <Protected>
              <Verify />
            </Protected>
          }
        /> */}
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
