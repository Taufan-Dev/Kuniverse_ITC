import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/scroll/ScrollToTop";

// pages
import Home from "./views/home";
import Wisata from "./views/wisata";
import Kuliner from "./views/kuliner";
import Umkm from "./views/umkm";
import Artikel from "./views/artikel";
import Profile from "./views/profile";

import DetailWisata from "./sections/wisata/detailWisata/detailWisata";
import KulinerDetailPage from "./sections/kuliner/kulinerDetail";
import ArticleDetailPage from "./views/artikel/detail";

import Login from "./views/auth/Login";
import Register from "./views/auth/Register";

import MainLayout from "./components/layout/mainLayout";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        {/* ROUTE DENGAN NAVBAR & FOOTER */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/wisata" element={<Wisata />} />
          <Route path="/wisata/detail" element={<DetailWisata />} />

          <Route path="/kuliner" element={<Kuliner />} />
          <Route path="/kuliner/detail" element={<KulinerDetailPage />} />

          <Route path="/umkm" element={<Umkm />} />
          <Route path="/artikel" element={<Artikel />} />
          <Route path="/artikel/detail" element={<ArticleDetailPage />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        {/* AUTH (TANPA NAVBAR & FOOTER) */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
