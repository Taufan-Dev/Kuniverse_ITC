import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // --- PAKSA LIGHT MODE ---
  useEffect(() => {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }, []);

  const handleStandardLogin = (e) => {
    e.preventDefault();
    alert("Login Berhasil!");
    navigate('/');
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F8F9FA] font-sans text-gray-800 relative overflow-hidden">

      <div className="absolute -top-[10%] -left-[10%] w-[500px] h-[500px] bg-[#C19D60] rounded-full mix-blend-multiply filter blur-[120px] opacity-40 animate-blob"></div>
      
      <div className="absolute top-[20%] -right-[10%] w-[400px] h-[400px] bg-yellow-200 rounded-full mix-blend-multiply filter blur-[120px] opacity-50 animate-blob animation-delay-2000"></div>
   
      <div className="absolute -bottom-[10%] left-[20%] w-[400px] h-[400px] bg-pink-100 rounded-full mix-blend-multiply filter blur-[120px] opacity-40 animate-blob animation-delay-4000"></div>
           

      {/* --- MAIN CONTENT --- */}
      <main className="flex-grow flex items-center justify-center pt-32 pb-20 px-4 relative z-10">
        
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h2 className="font-display text-5xl font-bold tracking-tight text-gray-900 drop-shadow-sm">Welcome Back</h2>
            <p className="mt-3 text-gray-600 font-medium">Masuk untuk menjelajahi keindahan Kuningan</p>
          </div>

          {/* --- KARTU GLASSMORPHISM (LIQUID GLASS) --- */}
          <div className="relative group">
            {/* Efek Glow di belakang kartu */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#C19D60] to-yellow-200 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            
            {/* KARTU UTAMA */}
            <div className="relative bg-white/60 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] rounded-3xl p-8 sm:p-10">
              
              <form className="space-y-6" onSubmit={handleStandardLogin}>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Email address</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <span className="material-icons-outlined text-gray-400 group-focus-within:text-[#C19D60] transition-colors">email</span>
                    </div>
                    {/* Input juga dibuat semi-transparan */}
                    <input 
                      type="email" 
                      required 
                      placeholder="name@example.com" 
                      className="block w-full pl-11 pr-4 py-3 bg-white/50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C19D60]/50 focus:border-[#C19D60] focus:bg-white transition-all shadow-sm" 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Password</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <span className="material-icons-outlined text-gray-400 group-focus-within:text-[#C19D60] transition-colors">lock</span>
                    </div>
                    <input 
                      type="password" 
                      required 
                      placeholder="••••••••" 
                      className="block w-full pl-11 pr-4 py-3 bg-white/50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C19D60]/50 focus:border-[#C19D60] focus:bg-white transition-all shadow-sm" 
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <input id="remember-me" type="checkbox" className="h-4 w-4 text-[#C19D60] focus:ring-[#C19D60] border-gray-300 rounded cursor-pointer" />
                    <label htmlFor="remember-me" className="ml-2 text-gray-600 cursor-pointer select-none">Ingat saya</label>
                  </div>
                  <a href="#" className="font-bold text-[#C19D60] hover:text-[#8a6d3b] hover:underline">Lupa password?</a>
                </div>

                <button type="submit" className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-xl shadow-lg shadow-[#C19D60]/30 text-sm font-bold text-white bg-[#C19D60] hover:bg-[#a6854e] hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C19D60] transition-all duration-300 cursor-pointer">
                  LOGIN SEKARANG
                </button>
              </form>

              {/* DIVIDER GLASS */}
              <div className="mt-8">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300/50"></div>
                  </div>
                  <div className="relative flex justify-center text-xs uppercase tracking-widest">
                    <span className="px-3 bg-transparent text-gray-500 font-semibold backdrop-blur-sm rounded-full">Atau masuk dengan</span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <button className="flex justify-center items-center py-3 px-5 bg-white/70 border border-white hover:bg-white rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer group">
                     <svg className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                     <span className="ml-2 text-sm font-semibold text-gray-600">Google</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-gray-500 mt-8 font-medium">
            Belum punya akun? <a href="#" className="font-bold text-[#C19D60] hover:underline">Daftar sekarang</a>
          </p>
        </div>
      </main>
      
    </div>
  );
};

export default Login;