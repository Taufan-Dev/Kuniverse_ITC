import React from 'react';

const destinations = [
  { 
    id: 1, 
    title: "Telaga Biru Cicerem", 
    loc: "Kaduela, Pasawahan", 
    rating: 4.8, 
    img: "https://images.pexels.com/photos/2444403/pexels-photo-2444403.jpeg?auto=compress&cs=tinysrgb&w=800" 
  },
  { 
    id: 2, 
    title: "Waduk Darma", 
    loc: "Darma, Kuningan", 
    rating: 4.7, 
    img: "https://images.pexels.com/photos/2132126/pexels-photo-2132126.jpeg?auto=compress&cs=tinysrgb&w=800" 
  },
  { 
    id: 3, 
    title: "Gedung Linggarjati", 
    loc: "Linggarjati, Cilimus", 
    rating: 4.9, 
    img: "https://images.pexels.com/photos/534228/pexels-photo-534228.jpeg?auto=compress&cs=tinysrgb&w=800" 
  },
  { 
    id: 4, 
    title: "Curug Putri", 
    loc: "Cisantana, Cigugur", 
    rating: 4.6, 
    img: "https://images.pexels.com/photos/358457/pexels-photo-358457.jpeg?auto=compress&cs=tinysrgb&w=800" 
  },
  { 
    id: 5, 
    title: "Sukageuri View", 
    loc: "Cisantana, Cigugur", 
    rating: 4.7, 
    img: "https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=800" 
  },
  { 
    id: 6, 
    title: "Woodland", 
    loc: "Setianegara, Cilimus", 
    rating: 4.5, 
    img: "https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg?auto=compress&cs=tinysrgb&w=800" 
  },
];

const WisataContent = () => {
  return (
    <section>
      {/* Search Bar */}
      <div className="bg-white border border-gray-100 rounded-xl p-3 flex flex-col md:flex-row gap-4 items-center mb-12 shadow-sm">
        <div className="relative w-full">
          <span className="material-icons-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">search</span>
          <input 
            type="text" 
            placeholder="Cari wisata di Kuningan..." 
            className="w-full pl-12 pr-4 py-2.5 bg-gray-50 rounded-lg text-sm outline-none focus:ring-1 focus:ring-[#C49A5C]" 
          />
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <select className="px-4 py-2.5 bg-gray-50 rounded-lg text-sm text-gray-600 outline-none cursor-pointer hover:bg-gray-100 w-full md:w-auto">
            <option>Semua Kategori</option>
            <option>Alam</option>
            <option>Sejarah</option>
          </select>
          <select className="px-4 py-2.5 bg-gray-50 rounded-lg text-sm text-gray-600 outline-none cursor-pointer hover:bg-gray-100 w-full md:w-auto">
            <option>Area Terdekat</option>
            <option>Cigugur</option>
            <option>Cilimus</option>
          </select>
        </div>
      </div>

      {/* Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((item) => (
          <div key={item.id} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="relative h-60 overflow-hidden bg-gray-200">
              <img 
                src={item.img} 
                alt={item.title} 
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute top-3 right-3 bg-white/90 px-2 py-1 rounded-md text-xs font-bold text-[#C49A5C] flex items-center gap-1 shadow-sm">
                <span className="material-icons-outlined text-[14px]">star</span> {item.rating}
              </div>
            </div>
            <div className="p-5 text-left">
              <h3 className="font-serif text-lg font-bold mb-2 text-gray-900">{item.title}</h3>
              <p className="text-gray-400 text-xs mb-4 line-clamp-2">
                Nikmati keindahan {item.title} yang memukau di Kuningan.
              </p>
              <div className="flex justify-between items-center border-t border-gray-50 pt-4">
                <span className="text-xs text-gray-400 flex items-center gap-1">
                  <span className="material-icons-outlined text-[16px]">location_on</span> {item.loc}
                </span>
                <button className="text-[#C49A5C] bg-[#C49A5C]/10 hover:bg-[#C49A5C] hover:text-white px-4 py-1.5 rounded-md text-[10px] font-bold tracking-wider transition-all cursor-pointer">
                  DETAIL
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WisataContent;