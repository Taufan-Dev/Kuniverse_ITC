import { Link } from "react-router-dom";

const ArtikelHero = () => {
  return (
    <div
      className="xl:col-span-3 h-[280px] md:h-[350px] xl:h-[450px] relative flex items-end rounded-xl overflow-hidden p-4 md:p-10"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/14/ad/31/14ad3171038b99261210a9fbe6785d41.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/75 to-black/30"></div>

      <div className="relative z-10 w-full max-w-3xl">
        <h6 className="text-prestige-gold font-semibold text-sm md:text-base mb-2">
          Kategori Artikel
        </h6>

        <Link to="/artikel/detail">
          <h2 className="text-white font-bold text-xl md:text-2xl xl:text-3xl">
            Judul Artikel Utama yang Menarik dan Informatif
          </h2>
        </Link>

        <p className="text-gray-200 mt-3 text-sm hidden xl:block">
          Deskripsi singkat artikel utama untuk menarik minat pembaca.
        </p>
      </div>
    </div>
  );
};

export default ArtikelHero;
