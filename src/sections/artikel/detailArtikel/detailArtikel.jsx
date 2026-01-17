import { FiCalendar, FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const ArticleDetail = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* KEMBALI */}
      <button
        onClick={() => navigate(-1)}
        className="
          mb-6
          flex items-center gap-2
          text-sm font-semibold
          text-gray-600
          hover:text-prestige-gold
          transition
        "
      >
        <FiArrowLeft className="text-lg" />
        Kembali
      </button>

      {/* KATEGORI */}
      <p className="text-prestige-gold font-semibold text-sm md:text-base mb-2">
        Teknologi
      </p>

      {/* JUDUL */}
      <h1 className="text-3xl font-bold mb-3">
        Inovasi Terbaru dalam Dunia Digital 2025
      </h1>

      {/* AUTHOR */}
      <p className="font-semibold mb-4">
        Dipublikasikan Oleh{" "}
        <span className="text-prestige-gold">Taufan Hidayatul Akbar</span>
      </p>

      {/* TANGGAL */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <FiCalendar />
        <span>10 Juni 2025</span>
      </div>

      {/* IMAGE */}
      <img
        src="https://i.pinimg.com/736x/14/ad/31/14ad3171038b99261210a9fbe6785d41.jpg"
        alt="Artikel"
        className="w-full h-[256px] object-cover rounded-xl mb-6"
      />

      {/* CONTENT */}
      <article className="prose max-w-none text-justify">
        Dunia digital terus berkembang pesat dengan hadirnya teknologi seperti
        kecerdasan buatan, blockchain, dan Internet of Things (IoT). Inovasi ini
        membawa perubahan besar di berbagai sektor kehidupan.
        <br />
        <br />
        Dunia digital terus berkembang pesat dengan hadirnya teknologi seperti
        kecerdasan buatan, blockchain, dan Internet of Things (IoT). Inovasi ini
        membawa perubahan besar di berbagai sektor kehidupan.
        <br />
        <br />
        Dunia digital terus berkembang pesat dengan hadirnya teknologi seperti
        kecerdasan buatan, blockchain, dan Internet of Things (IoT). Inovasi ini
        membawa perubahan besar di berbagai sektor kehidupan.
      </article>
    </>
  );
};

export default ArticleDetail;
