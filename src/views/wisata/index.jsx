import React from "react";
import WisataSection from "../../sections/wisata/wisataSection";
import WisataContent from "../../sections/wisata/wisataContent";

const wisata = () => {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Judul Halaman */}
        <div className="text-center mb-10 pt-4">
          <div className="mt-2 h-1 w-12 bg-[#C49A5C] mx-auto opacity-50 rounded-full"></div>
        </div>

        {/* Memanggil Komponen */}
        <WisataSection />
        <WisataContent />

        {/* Tombol Load More */}
        <div className="mt-16 text-center pb-12">
          <button className="border border-[#C49A5C] text-[#C49A5C] px-8 py-3 rounded-full text-sm font-bold hover:bg-[#C49A5C] hover:text-white transition-all cursor-pointer">
            JELAJAHI LEBIH BANYAK
          </button>
        </div>
      </main>
    </div>
  );
};

export default wisata;
