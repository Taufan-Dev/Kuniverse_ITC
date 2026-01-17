import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/navbar";
import Wisata from "./views/wisata";
import Kuliner from "./views/kuliner";
import Umkm from "./views/umkm";
import Artikel from "./views/artikel";
import Home from "./views/home";
import Footer from "./components/footer/footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wisata" element={<Wisata />} />
        <Route path="/kuliner" element={<Kuliner />} />
        <Route path="/umkm" element={<Umkm />} />
        <Route path="/artikel" element={<Artikel />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
