
import AnimatedRoutes from "./components/AnimatedRoutes/AnimatedRoutes";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter, } from "react-router-dom";


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
