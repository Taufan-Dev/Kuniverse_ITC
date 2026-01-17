// componets
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import ScrollToTop from "./components/scroll/ScrollToTop";

// pages
import Wisata from "./views/wisata";
import Kuliner from "./views/kuliner";
import Umkm from "./views/umkm";
import Artikel from "./views/artikel";
import Home from "./views/home";
import DetailWisata from "./sections/wisata/detailWisata/detailWisata";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Navbar />

      <Routes>
        <Route path="/wisata/detail" element={<DetailWisata />} />
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
