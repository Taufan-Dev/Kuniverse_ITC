import { Link } from "react-router-dom";
import { FiCalendar, FiArrowRight } from "react-icons/fi";

const ArtikelCard = ({ image, category, title, desc, date }) => {
  return (
    <div className="grid grid-cols-5 gap-6 mb-12 items-center">
      {/* CARD UTAMA (CLICKABLE) */}
      <Link
        to="/artikel/detail"
        className="
          col-span-5 md:col-span-3
          border border-prestige-gold/70
          rounded-2xl
          p-3
          bg-white
          hover:shadow-md
          hover:-translate-y-0.5
          transition-all
          block
        "
      >
        <div className="grid md:grid-cols-7 gap-5 items-center">
          {/* IMAGE */}
          <div className="md:col-span-3 overflow-hidden rounded-xl">
            <img
              src={image}
              alt={title}
              className="w-full h-[180px] md:h-[200px] object-cover"
            />
          </div>

          {/* CONTENT */}
          <div className="md:col-span-4">
            <p className="text-prestige-gold text-xs font-semibold tracking-widest uppercase">
              {category}
            </p>

            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mt-1.5 mb-2 leading-snug">
              {title}
            </h3>

            <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
              {desc}
            </p>

            <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
              <div className="flex items-center gap-2">
                <FiCalendar className="text-sm" />
                <span>{date}</span>
              </div>

              <span className="flex items-center gap-1 text-prestige-gold font-semibold">
                Baca
                <FiArrowRight className="text-sm" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ArtikelCard;
