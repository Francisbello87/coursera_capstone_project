import "./App.css";
import AnimatedRoutes from "./components/AnimatedRoutes"
import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import Main from "./components/Main";

function App() {
  return (
   <BrowserRouter>
   <AnimatePresence mode="wait">
    <AnimatedRoutes/>
   </AnimatePresence>
   
   </BrowserRouter>
  );
}

export default App;
