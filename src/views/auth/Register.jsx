import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  // paksa light mode
  useEffect(() => {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }, []);

  const handleRegister = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      alert("Akun berhasil dibuat (dummy)");
      navigate("/login");
    }, 1200);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8F9FA] relative overflow-hidden px-4">
      {/* background blob */}
      <div className="absolute -top-[15%] -left-[10%] w-[420px] h-[420px] bg-[#C19D60] rounded-full blur-[120px] opacity-30"></div>
      <div className="absolute -bottom-[15%] -right-[10%] w-[420px] h-[420px] bg-yellow-200 rounded-full blur-[120px] opacity-40"></div>

      {/* card */}
      <div className="relative w-full max-w-md">
        <div className="absolute -inset-1 bg-gradient-to-r from-[#C19D60] to-yellow-200 rounded-3xl blur opacity-20"></div>

        <div className="relative bg-white/60 backdrop-blur-xl border border-white/50 rounded-3xl p-8 shadow-lg">
          {/* header */}
          <div className="text-center mb-6">
            <h2 className="text-4xl font-bold text-gray-900">Daftar Akun</h2>
            <p className="text-gray-600 mt-1 text-sm">
              Buat akun untuk mulai menjelajah Kuniverse
            </p>
          </div>

          {/* form */}
          <form onSubmit={handleRegister} className="space-y-4">
            {/* nama */}
            <div>
              <label className="text-sm font-semibold text-gray-700">
                Nama Lengkap
              </label>
              <input
                type="text"
                required
                placeholder="Kuniverse"
                className="mt-1 w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/60 focus:outline-none focus:ring-2 focus:ring-[#C19D60]/40"
              />
            </div>

            {/* email */}
            <div>
              <label className="text-sm font-semibold text-gray-700">
                Email
              </label>
              <input
                type="email"
                required
                placeholder="email@example.com"
                className="mt-1 w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/60 focus:outline-none focus:ring-2 focus:ring-[#C19D60]/40"
              />
            </div>

            {/* password */}
            <div>
              <label className="text-sm font-semibold text-gray-700">
                Password
              </label>
              <input
                type="password"
                required
                placeholder="••••••••"
                className="mt-1 w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/60 focus:outline-none focus:ring-2 focus:ring-[#C19D60]/40"
              />
            </div>

            {/* confirm password */}
            <div>
              <label className="text-sm font-semibold text-gray-700">
                Konfirmasi Password
              </label>
              <input
                type="password"
                required
                placeholder="••••••••"
                className="mt-1 w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/60 focus:outline-none focus:ring-2 focus:ring-[#C19D60]/40"
              />
            </div>

            {/* register mitra text */}
            <p className="text-sm text-center text-gray-600 pt-2">
              Mau register sebagai mitra?{" "}
              <a
                href="/register-mitra"
                className="font-bold text-[#C19D60] hover:underline"
              >
                Daftar di sini
              </a>
            </p>

            {/* submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-3 py-3 rounded-xl bg-[#C19D60] text-white font-bold shadow-lg shadow-[#C19D60]/30 hover:bg-[#a6854e] transition disabled:opacity-70"
            >
              {isLoading ? "Memproses..." : "DAFTAR SEKARANG"}
            </button>
          </form>

          {/* footer */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Sudah punya akun?{" "}
            <a
              href="/login"
              className="font-bold text-[#C19D60] hover:underline"
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
