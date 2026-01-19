import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }, []);

  const handleRegister = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      alert("Akun Berhasil Dibuat! Silakan Login.");
      navigate('/login'); 
    }, 1500);
  };

  const handleGoogleRegister = () => {
    alert("Fitur Daftar dengan Google (Simulasi)");
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F8F9FA] font-sans text-gray-800 relative overflow-hidden">

      {/* --- BACKGROUND BLOBS (ANIMASI) --- */}
      <div className="absolute -top-[10%] -right-[10%] w-[500px] h-[500px] bg-[#C19D60] rounded-full mix-blend-multiply filter blur-[120px] opacity-30 animate-blob"></div>
      <div className="absolute top-[30%] -left-[10%] w-[400px] h-[400px] bg-yellow-200 rounded-full mix-blend-multiply filter blur-[120px] opacity-50 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-[10%] right-[20%] w-[400px] h-[400px] bg-pink-100 rounded-full mix-blend-multiply filter blur-[120px] opacity-40 animate-blob animation-delay-4000"></div>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-grow flex items-center justify-center pt-32 pb-20 px-4 relative z-10">
        
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 drop-shadow-sm">Daftar Sekarang</h2>
            <p className="mt-3 text-gray-600 font-medium">Buat akun untuk mulai menjelajah</p>
          </div>

          {/* --- KARTU REGISTER (GLASS) --- */}
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#C19D60] to-yellow-200 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            
            <div className="relative bg-white/60 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] rounded-3xl p-8 sm:p-10">
              
              <form className="space-y-5" onSubmit={handleRegister}>
                
                {/* Input Nama */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Nama Lengkap</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <span className="material-icons-outlined text-gray-400 group-focus-within:text-[#C19D60] transition-colors">person</span>
                    </div>
                    <input type="text" required placeholder="Kuniverse" className="block w-full pl-11 pr-4 py-3 bg-white/50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C19D60]/50 focus:border-[#C19D60] focus:bg-white transition-all shadow-sm" />
                  </div>
                </div>

                {/* Input Email */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Email address</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <span className="material-icons-outlined text-gray-400 group-focus-within:text-[#C19D60] transition-colors">email</span>
                    </div>
                    <input type="email" required placeholder="name@example.com" className="block w-full pl-11 pr-4 py-3 bg-white/50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C19D60]/50 focus:border-[#C19D60] focus:bg-white transition-all shadow-sm" />
                  </div>
                </div>

                {/* Input Password */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Password</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <span className="material-icons-outlined text-gray-400 group-focus-within:text-[#C19D60] transition-colors">lock</span>
                    </div>
                    <input type="password" required placeholder="••••••••" className="block w-full pl-11 pr-4 py-3 bg-white/50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C19D60]/50 focus:border-[#C19D60] focus:bg-white transition-all shadow-sm" />
                  </div>
                </div>

                {/* Input Confirm Password */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Konfirmasi Password</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <span className="material-icons-outlined text-gray-400 group-focus-within:text-[#C19D60] transition-colors">lock_reset</span>
                    </div>
                    <input type="password" required placeholder="••••••••" className="block w-full pl-11 pr-4 py-3 bg-white/50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C19D60]/50 focus:border-[#C19D60] focus:bg-white transition-all shadow-sm" />
                  </div>
                </div>

                <div className="pt-2">
                    <button type="submit" disabled={isLoading} className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-xl shadow-lg shadow-[#C19D60]/30 text-sm font-bold text-white bg-[#C19D60] hover:bg-[#a6854e] hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C19D60] transition-all duration-300 cursor-pointer disabled:opacity-70">
                    {isLoading ? 'Memproses...' : 'DAFTAR SEKARANG'}
                    </button>
                </div>
              </form>

              {/* DIVIDER */}
              <div className="mt-8">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300/50"></div>
                  </div>
                  <div className="relative flex justify-center text-xs uppercase tracking-widest">
                    <span className="px-3 bg-transparent text-gray-500 font-semibold backdrop-blur-sm rounded-full">Atau daftar dengan</span>
                  </div>
                </div>

                {/* TOMBOL SOSIAL (RAPI) */}
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <button onClick={handleGoogleRegister} className="flex items-center justify-center gap-3 py-3 px-4 bg-white/70 border border-white hover:bg-white rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer group w-full">
                    <svg className="w-5 h-5 shrink-0 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    <span className="text-sm font-semibold text-gray-600 group-hover:text-gray-900 transition-colors">Google</span>
                  </button>

                  <button className="flex items-center justify-center gap-3 py-3 px-4 bg-white/70 border border-white hover:bg-white rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer group w-full">
                    <svg className="w-5 h-5 shrink-0 text-[#1877F2] group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span className="text-sm font-semibold text-gray-600 group-hover:text-gray-900 transition-colors">Facebook</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-gray-500 mt-8 font-medium">
            Sudah punya akun? <a href="/login" className="font-bold text-[#C19D60] hover:underline">Login sekarang</a>
          </p>
        </div>
      </main>

    </div>
  );
};

export default Register;