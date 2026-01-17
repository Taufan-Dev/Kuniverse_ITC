const CtaSection = () => {
  return (
    <section className="relative px-5 md:px-10 xl:px-20 py-24 overflow-hidden">
      {/* Aksen gradient kiri */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-gradient-to-br from-prestige-gold/40 to-transparent rounded-full blur-3xl" />

      {/* Aksen gradient kanan */}
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-gradient-to-tr from-prestige-gold/30 to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto text-center bg-white rounded-2xl shadow-xl/20 border border-gray-100 px-6 md:px-16 py-16">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-light tracking-widest uppercase text-gray-800">
          Tunggu Apa Lagi?
        </h2>

        <p className="mt-4 max-w-2xl mx-auto text-sm md:text-base text-gray-600">
          Jelajahi wisata Kuningan, temukan kuliner khas terbaik, dan dukung
          UMKM lokal melalui satu platform digital bernama{" "}
          <span className="font-serif tracking-widest uppercase text-prestige-gold">
            KuniVerse
          </span>
          .
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/wisata"
            className="px-8 py-3 rounded-full bg-prestige-gold text-white font-medium shadow hover:shadow-lg hover:opacity-90 transition"
          >
            Jelajahi Sekarang
          </a>

          <a
            href="/artikel"
            className="px-8 py-3 rounded-full border border-prestige-gold text-prestige-gold hover:bg-prestige-gold hover:text-white transition"
          >
            Baca Artikel
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
