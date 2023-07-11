
import AnimatedRoutes from "./components/AnimatedRoutes";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        <AnimatedRoutes />
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
