const WisataSection = () => {
  return (
    <section className="relative h-[60vh] rounded-3xl overflow-hidden group mb-12 shadow-xl mx-auto mt-8">
      {/* Gambar Pexels */}
      <img
        src="https://i.pinimg.com/736x/14/ad/31/14ad3171038b99261210a9fbe6785d41.jpg"
        alt="Gunung Ciremai"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Overlay Gelap */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/75 to-black/30"></div>

      {/* Teks Konten */}
      <div className="absolute bottom-10 left-8 md:left-12 max-w-2xl text-white text-left">
        <span className="bg-[#C49A5C] text-xs font-bold tracking-widest px-3 py-1 rounded mb-4 inline-block uppercase shadow-md">
          Ikon Kuningan
        </span>
        <h2 className="font-serif text-4xl md:text-5xl mb-4 leading-tight drop-shadow-lg">
          Pesona Gunung Ciremai
        </h2>
        <p className="text-gray-100 mb-8 opacity-90 text-sm md:text-base leading-relaxed">
          Atap Jawa Barat yang menawarkan keindahan alam memukau, jalur
          pendakian menantang, dan kesejukan udara khas pegunungan.
        </p>
        <button className="bg-[#C49A5C] text-white px-8 py-3 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-[#b08b52] transition-all cursor-pointer">
          JELAJAHI SEKARANG{" "}
          <span className="material-icons-outlined text-sm">arrow_forward</span>
        </button>
      </div>
    </section>
  );
};

export default WisataSection;
