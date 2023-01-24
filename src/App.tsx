import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

import { AnimatePresence } from "framer-motion";
import InitialTransition from "./utils/InitialTransition";

/* https://www.section.io/engineering-education/page-transition-in-react-using-framer-motion/ */

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <AnimatePresence>
        <InitialTransition>
          <Header />
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </InitialTransition>
      </AnimatePresence>
    </div>
  );
}

export default App;
