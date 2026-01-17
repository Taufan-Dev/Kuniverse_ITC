const ArtikelVideo = () => {
  return (
    <div className="hidden xl:block">
      <div className="relative w-full h-full max-w-[245px] mx-auto rounded-xl overflow-hidden shadow-lg">
        {/* VIDEO */}
        <video className="w-full h-full object-cover" autoPlay muted loop>
          <source
            src="https://v1.pinimg.com/videos/mc/720p/5f/fb/b3/5ffbb3be23d853129a1bd0597c45e41b.mp4"
            type="video/mp4"
          />
        </video>

        {/* GRADIENT OVERLAY */}
        <div
          className="
          absolute inset-0
          bg-gradient-to-t
          from-black/80
          via-black/40
          to-transparent
        "
        />
      </div>
    </div>
  );
};

export default ArtikelVideo;
