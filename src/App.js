import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Main from "./pages/Main";
import About from "./pages/About";
import Whoops404 from "./pages/Whoops404";
import Newsletter from "./pages/Newsletter";
import Gallery from "./pages/Gallery";
import Events from "./pages/Events";
import Background from "./components/Background";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="body">
      <Background />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route index element={<Main />} />
          <Route path="/home" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/events" element={<Events />} />
          <Route path="*" element={<Whoops404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
