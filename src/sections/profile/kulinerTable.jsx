import { useState } from "react";
import { FiEye, FiX, FiMapPin } from "react-icons/fi";

const dummyData = [
  {
    nama: "Saung Sunda Kuningan",
    tanggal: "12 Januari 2025",
    foto: "https://source.unsplash.com/400x300/?restaurant",
    maps: "https://maps.google.com",
    menu: [
      { nama: "Nasi Liwet", qty: 2, harga: 45000 },
      { nama: "Ayam Goreng", qty: 1, harga: 55000 },
      { nama: "Es Teh", qty: 3, harga: 5000 },
    ],
  },
];

const KulinerTable = () => {
  const [showModal, setShowModal] = useState(false);
  const [detail, setDetail] = useState(null);

  const openModal = (item) => {
    setDetail(item);
    setShowModal(true);
  };

  // 🔒 GUARD: pastikan menu array
  const menuList = Array.isArray(detail?.menu) ? detail.menu : [];

  // 🔒 HITUNG TOTAL AMAN
  const totalHarga = menuList.reduce(
    (sum, item) => sum + item.qty * item.harga,
    0,
  );

  return (
    <>
      {/* TABLE */}
      <div className="border border-prestige-gold/40 bg-white p-5 rounded-xl shadow-sm">
        <h2 className="font-semibold text-lg mb-4">Riwayat Kuliner</h2>

        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-3">No</th>
              <th className="p-3">Nama Restoran</th>
              <th className="p-3">Tanggal</th>
              <th className="p-3">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {dummyData.map((item, i) => (
              <tr key={i} className=" text-center">
                <td className="p-3">{i + 1}</td>
                <td className="p-3 font-medium">{item.nama}</td>
                <td className="p-3">{item.tanggal}</td>
                <td className="p-3">
                  <button
                    onClick={() => openModal(item)}
                    className="
    inline-flex items-center justify-center gap-2
    px-4 py-2
    border border-prestige-gold/60
    rounded-lg
    text-sm font-medium
    text-prestige-gold
    hover:bg-prestige-gold hover:text-white
    transition
  "
                  >
                    <FiEye className="text-base" />
                    <span>Lihat Detail</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-red-500 mt-10">
          Note : Bukti Reservasi Dikirim Melalui Email Yang Terdaftar
        </p>
      </div>

      {/* MODAL */}
      {showModal && detail && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
          <div className="bg-white max-w-xl w-full rounded-2xl p-6 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4"
            >
              <FiX size={20} />
            </button>

            <h3 className="text-xl font-semibold mb-4">{detail.nama}</h3>

            <table className="w-full text-sm mb-4">
              <thead className="bg-gray-50">
                <tr>
                  <th className="p-2 text-left">Menu</th>
                  <th className="p-2 text-center">Qty</th>
                  <th className="p-2 text-right">Harga</th>
                  <th className="p-2 text-right">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {menuList.map((m, i) => (
                  <tr key={i} className="border-t">
                    <td className="p-2">{m.nama}</td>
                    <td className="p-2 text-center">{m.qty}</td>
                    <td className="p-2 text-right">
                      Rp {m.harga.toLocaleString()}
                    </td>
                    <td className="p-2 text-right font-semibold">
                      Rp {(m.qty * m.harga).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="flex justify-between font-semibold text-lg mb-3">
              <span>Total</span>
              <span className="text-prestige-gold">
                Rp {totalHarga.toLocaleString()}
              </span>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <FiMapPin />
              <a href={detail.maps} target="_blank" className="underline">
                Lihat Lokasi
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default KulinerTable;
