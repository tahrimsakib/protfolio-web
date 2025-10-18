import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Works from "./pages/Works.jsx";
import Connect from "./pages/Connect.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";

const App = () => {
  return (
    <div className="relative flex min-h-screen flex-col bg-slate-950/70">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.22),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(99,102,241,0.18),_transparent_60%)]" />
      <ScrollToTop />
      <Navbar />
      <main className="flex-1 pt-24 pb-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
