import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

const MainLayout = () => {
  const location = useLocation();

  // halaman tanpa navbar & footer
  const hideLayout = ["/login", "/register"].includes(location.pathname);

  return (
    <>
      {!hideLayout && <Navbar />}

      <Outlet />

      {!hideLayout && <Footer />}
    </>
  );
};

export default MainLayout;
