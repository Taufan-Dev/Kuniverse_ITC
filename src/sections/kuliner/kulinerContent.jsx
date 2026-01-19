import React from "react";
import { Link } from "react-router-dom";

const restaurants = [
  {
    id: 1,
    title: "Hutan Kota by Plataran Kuningan",
    loc: "Cigugur, Kuningan",
    rating: 4.8,
    img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 2,
    title: "Saung Liwet Bu Tini",
    loc: "Cilimus, Kuningan",
    rating: 4.7,
    img: "https://images.pexels.com/photos/5410418/pexels-photo-5410418.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 3,
    title: "Rumah Makan Ampera Kuningan",
    loc: "Kuningan Kota",
    rating: 4.6,
    img: "https://images.pexels.com/photos/1111317/pexels-photo-1111317.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 4,
    title: "Saung Lesehan Cibulan",
    loc: "Maniskidul, Jalaksana",
    rating: 4.7,
    img: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 5,
    title: "Warung Nasi Kasreng",
    loc: "Cigugur, Kuningan",
    rating: 4.5,
    img: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 6,
    title: "Saung Apung Darma",
    loc: "Darma, Kuningan",
    rating: 4.8,
    img: "https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

const KulinerContent = () => {
  return (
    <section>
      {/* Search Bar */}
      <div className="bg-white border border-prestige-gold rounded-xl p-3 flex flex-col md:flex-row gap-4 items-center mb-12 shadow-sm">
        <div className="relative w-full">
          <span className="material-icons-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            search
          </span>
          <input
            type="text"
            placeholder="Cari restoran di Kuningan..."
            className="w-full pl-12 pr-4 py-2.5 bg-gray-50 rounded-lg text-sm outline-none focus:ring-1 focus:ring-[#C49A5C]"
          />
        </div>

        <div className="flex gap-3 w-full md:w-auto">
          <select className="px-4 py-2.5 bg-gray-50 rounded-lg text-sm text-gray-600 outline-none cursor-pointer hover:bg-gray-100 w-full md:w-auto">
            <option>Semua Menu</option>
            <option>Sunda</option>
            <option>Nusantara</option>
            <option>Cafe</option>
          </select>

          <select className="px-4 py-2.5 bg-gray-50 rounded-lg text-sm text-gray-600 outline-none cursor-pointer hover:bg-gray-100 w-full md:w-auto">
            <option>Area</option>
            <option>Cigugur</option>
            <option>Cilimus</option>
            <option>Darma</option>
          </select>
        </div>
      </div>

      {/* Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {restaurants.map((item) => (
          <div
            key={item.id}
            className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="relative h-60 overflow-hidden bg-gray-200">
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute top-3 right-3 bg-white/90 px-2 py-1 rounded-md text-xs font-bold text-[#C49A5C] flex items-center gap-1 shadow-sm">
                <span className="material-icons-outlined text-[14px]">
                  star
                </span>
                {item.rating}
              </div>
            </div>

            <div className="p-5 text-left">
              <h3 className="font-serif text-lg font-bold mb-2 text-gray-900">
                {item.title}
              </h3>

              <p className="text-gray-400 text-xs mb-4 line-clamp-2">
                Nikmati hidangan khas dan suasana khas {item.title} di Kuningan.
              </p>

              <div className="flex justify-between items-center border-t border-gray-50 pt-4">
                <span className="text-xs text-gray-400 flex items-center gap-1">
                  <span className="material-icons-outlined text-[16px]">
                    location_on
                  </span>
                  {item.loc}
                </span>

                <Link to="/kuliner/detail">
                  <button className="text-[#C49A5C] bg-[#C49A5C]/10 hover:bg-[#C49A5C] hover:text-white px-4 py-1.5 rounded-md text-[10px] font-bold tracking-wider transition-all cursor-pointer">
                    DETAIL
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KulinerContent;
