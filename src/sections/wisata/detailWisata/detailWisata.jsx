import GambarWisata from "./gambarWisata";

const DetailWisata = () => {
  const images = [
    "https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg",
    "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg",
    "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg",
    "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg",
    "https://images.pexels.com/photos/356807/pexels-photo-356807.jpeg",
  ];

  return (
    <section className="px-5 md:px-10 xl:px-20 py-26 text-gray-800">
      {/* ===== GRID FOTO ===== */}
      <GambarWisata images={images} />

      {/* ===== HEADER ===== */}
      <div className="max-w-4xl mx-auto mb-5 text-center">
        <span className="font-serif tracking-widest uppercase text-prestige-gold text-sm">
          Wisata Kuningan
        </span>

        <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-serif font-light">
          Pesona Gunung Ciremai
        </h1>

        <p className="mt-4 text-gray-500 text-sm">
          Kabupaten Kuningan, Jawa Barat
        </p>
      </div>

      {/* ===== BOOKING PANEL ===== */}
      <div className="max-w-4xl mx-auto mb-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-white rounded-2xl shadow-lg border border-prestige-gold p-6">
          {/* Harga */}
          <div className="flex flex-col justify-center">
            <p className="text-xs text-gray-500">Harga Tiket</p>
            <p className="text-2xl font-semibold text-prestige-gold">
              Rp 25.000
            </p>
            <p className="text-xs text-gray-400">/ orang</p>
          </div>

          {/* Jumlah Orang */}
          <div>
            <label className="text-xs text-gray-500">Jumlah Orang</label>
            <select className="w-full mt-2 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-prestige-gold">
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num} Orang
                </option>
              ))}
            </select>
          </div>

          {/* Tanggal */}
          <div>
            <label className="text-xs text-gray-500">Tanggal Kunjungan</label>
            <input
              type="date"
              className="w-full mt-2 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-prestige-gold"
            />
          </div>

          {/* Tombol Pesan */}
          <div className="flex items-end">
            <button className="w-full bg-prestige-gold text-white py-3 rounded-lg font-medium hover:opacity-90 transition">
              Pesan Tiket
            </button>
          </div>
        </div>
      </div>

      {/* ===== KONTEN ===== */}
      <div className="max-w-4xl mx-auto space-y-6 text-gray-700 leading-relaxed text-sm md:text-base">
        <p>
          Gunung Ciremai merupakan gunung tertinggi di Jawa Barat yang menjadi
          ikon utama pariwisata Kabupaten Kuningan. Dengan ketinggian mencapai
          3.078 mdpl, gunung ini menawarkan panorama alam yang memukau serta
          udara pegunungan yang sejuk.
        </p>

        <p>
          Kawasan ini dikelilingi hutan tropis yang masih asri, jalur pendakian
          yang menantang, serta sumber mata air alami. Tidak hanya bagi pendaki,
          Gunung Ciremai juga cocok sebagai destinasi wisata alam keluarga.
        </p>

        <p>
          Nilai budaya, sejarah, dan kearifan lokal masyarakat sekitar menjadi
          pelengkap pengalaman wisata yang autentik di Kabupaten Kuningan.
        </p>
      </div>
    </section>
  );
};

export default DetailWisata;
