import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FiMap,
  FiCoffee,
  FiShoppingBag,
  FiFileText,
  FiMenu,
  FiX,
  FiLogIn,
  FiUserPlus,
} from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { label: "Wisata", path: "/wisata", icon: <FiMap /> },
    { label: "Kuliner", path: "/kuliner", icon: <FiCoffee /> },
    { label: "UMKM", path: "/umkm", icon: <FiShoppingBag /> },
    { label: "Artikel", path: "/artikel", icon: <FiFileText /> },
  ];

  return (
    <header className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-7xl">
      <nav className="glass-crystal rounded-full px-6 md:px-8 py-4 flex items-center justify-between relative">
        {/* LEFT — LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <span className="font-serif text-xl font-extralight tracking-widest text-prestige-gold uppercase">
            KuniVerse
          </span>
        </Link>

        {/* CENTER — DESKTOP MENU */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
          {menuItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                `relative group flex items-center gap-2
                text-sm uppercase tracking-widest transition-colors
                ${isActive ? "text-prestige-gold" : "hover:text-prestige-gold"}`
              }
            >
              <span className="text-lg">{item.icon}</span>
              {item.label}

              {/* underline */}
              <span
                className={`absolute -bottom-2 left-0 w-full h-0.5 bg-prestige-gold
                origin-left transition-transform duration-300
                ${"group-hover:scale-x-100"} scale-x-0`}
              />
            </NavLink>
          ))}
        </div>

        {/* RIGHT — DESKTOP ACTIONS */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/login"
            className="flex items-center gap-2 bg-prestige-gold text-forest
            px-5 py-2 rounded-full text-[13px] font-bold uppercase tracking-widest
            hover:bg-ethereal-white transition-all hover:scale-105 active:scale-95"
          >
            <FiLogIn className="text-lg" />
            Login
          </Link>

          <Link
            to="/register"
            className="flex items-center gap-2 border border-prestige-gold text-prestige-gold
            px-5 py-2 rounded-full text-[13px] font-bold uppercase tracking-widest
            hover:bg-prestige-gold hover:text-forest transition-all hover:scale-105 active:scale-95"
          >
            <FiUserPlus className="text-lg" />
            Register
          </Link>
        </div>

        {/* MOBILE — HAMBURGER */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-prestige-gold text-2xl"
          aria-label="Toggle menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>

        {/* MOBILE MENU */}
        {open && (
          <div className="absolute top-full left-0 w-full mt-4 glass-crystal rounded-3xl px-6 py-8 flex flex-col gap-6 text-center md:hidden">
            {menuItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex flex-col items-center gap-2 text-xs uppercase tracking-[0.3em]
                  transition-colors
                  ${
                    isActive ? "text-prestige-gold" : "hover:text-prestige-gold"
                  }`
                }
              >
                <span className="text-2xl">{item.icon}</span>
                {item.label}
              </NavLink>
            ))}

            {/* MOBILE ACTIONS */}
            <div className="flex flex-col gap-3 pt-4">
              <Link
                to="/login"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 bg-prestige-gold text-forest
                px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest
                hover:bg-ethereal-white transition-all active:scale-95"
              >
                <FiLogIn />
                Login
              </Link>

              <Link
                to="/register"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 border border-prestige-gold
                text-prestige-gold px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest
                hover:bg-prestige-gold hover:text-forest transition-all active:scale-95"
              >
                <FiUserPlus />
                Register
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
