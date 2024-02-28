import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Register from "./Profile/Register";
import { useEffect, useState } from "react";
import Login from "./Profile/Login";
import Footer from "./Components/Footer";
import About from "./Pages/About";

function NavbarWrapper() {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(false);

  // Hide navbar for /register and /login routes
  useEffect(() => {
    if (location.pathname === "/register" || location.pathname === "/login") {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
  }, [location.pathname]);

  return <>{showNavbar && <Navbar />}</>;
}

function FooterWrapper() {
  const location = useLocation();
  const [showFooter, setShowFooter] = useState(false);

  // Hide Footer for /register and /login routes
  useEffect(() => {
    if (location.pathname === "/register" || location.pathname === "/login") {
      setShowFooter(false);
    } else {
      setShowFooter(true);
    }
  }, [location.pathname]);

  return <>{showFooter && <Footer />}</>;
}

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarWrapper />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <FooterWrapper />
      </BrowserRouter>
    </>
  );
}

export default App;
