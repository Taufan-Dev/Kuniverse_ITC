import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  // paksa light mode
  useEffect(() => {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    alert("Login Berhasil!");
    navigate("/");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-[#F8F9FA] relative overflow-hidden font-sans text-gray-800">
      {/* BLOB BACKGROUND */}
      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-[#C19D60] rounded-full blur-[120px] opacity-40" />
      <div className="absolute top-1/4 -right-32 w-[380px] h-[380px] bg-yellow-200 rounded-full blur-[120px] opacity-50" />
      <div className="absolute -bottom-32 left-1/4 w-[380px] h-[380px] bg-pink-100 rounded-full blur-[120px] opacity-40" />

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-md px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            Welcome Back
          </h1>
          <p className="mt-2 text-gray-600">
            Masuk untuk menjelajahi keindahan Kuningan
          </p>
        </div>

        {/* CARD */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#C19D60] to-yellow-200 rounded-3xl blur opacity-20 group-hover:opacity-40 transition" />

          <div className="relative bg-white/60 backdrop-blur-xl border border-white/50 rounded-3xl p-8 shadow-lg">
            <form className="space-y-5" onSubmit={handleLogin}>
              {/* EMAIL */}
              <div>
                <label className="text-sm font-semibold mb-1 block">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/70 border focus:ring-2 focus:ring-[#C19D60]/50 focus:outline-none"
                />
              </div>

              {/* PASSWORD */}
              <div>
                <label className="text-sm font-semibold mb-1 block">
                  Password
                </label>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  className="w-full px-4 py-3 rounded-xl bg-white/70 border focus:ring-2 focus:ring-[#C19D60]/50 focus:outline-none"
                />
              </div>

              {/* REMEMBER */}
              <div className="flex justify-between text-sm">
                <label className="flex items-center gap-2 text-gray-600">
                  <input type="checkbox" className="accent-[#C19D60]" />
                  Ingat saya
                </label>
                <span className="text-[#C19D60] font-semibold cursor-pointer hover:underline">
                  Lupa password?
                </span>
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#C19D60] text-white font-bold hover:bg-[#a6854e] transition"
              >
                LOGIN
              </button>
            </form>

            {/* DIVIDER */}
            <div className="my-6 text-center text-xs text-gray-500">
              atau masuk dengan
            </div>

            {/* GOOGLE */}
            <button className="w-full py-3 rounded-xl bg-white border hover:shadow transition font-semibold">
              Google
            </button>
          </div>
        </div>

        {/* REGISTER */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Belum punya akun?{" "}
          <Link
            to="/register"
            className="font-bold text-[#C19D60] hover:underline"
          >
            Daftar sekarang
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
