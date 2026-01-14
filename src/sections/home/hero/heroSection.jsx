const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Split Background */}
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2">
        
        {/* Image 1 (Always Visible) */}
        <div className="relative overflow-hidden group">
          <div className="absolute inset-0 bg-forest/40 md:bg-forest/20 z-10 transition-opacity group-hover:opacity-0"></div>
          <div className="absolute inset-0 from-forest via-transparent to-transparent z-10 hidden md:block"></div>
          <div
            className="w-full h-full bg-cover bg-center scale-110 transition-transform duration-[10s]"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=3270&auto=format&fit=crop')",
            }}
          />
        </div>

        {/* Image 2 (ONLY FROM TABLET UP) */}
        <div className="relative overflow-hidden group hidden md:block">
          <div className="absolute inset-0 bg-forest/40 z-10 transition-opacity group-hover:opacity-0"></div>
          <div className="absolute inset-0 from-forest via-transparent to-transparent z-10"></div>
          <div
            className="w-full h-full bg-cover bg-center scale-110 transition-transform duration-[10s]"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=3474&auto=format&fit=crop')",
            }}
          />
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-30 text-center px-4 sm:px-6 mt-24 md:mt-16">
        <h1 className="font-serif text-white text-4xl sm:text-5xl md:text-7xl lg:text-9xl leading-[0.95] tracking-tighter max-w-5xl mx-auto drop-shadow-2xl">
          Kuningan
          <br />
          <span className="italic font-light bg-clip-text from-ethereal-white to-white/50">
            Kota
          </span>{" "}
          Kuda
        </h1>

        <p className="mt-6 md:mt-8 text-ethereal-white/70 text-xs sm:text-sm md:text-base max-w-xs sm:max-w-md md:max-w-xl mx-auto font-light leading-relaxed tracking-wide">
          Rasakan perpaduan kearifan leluhur dan teknologi masa depan di jantung
          lembah Ciremai yang diselimuti kabut.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
