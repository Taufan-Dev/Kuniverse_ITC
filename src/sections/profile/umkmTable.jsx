import { useState } from "react";
import { FiEye, FiX, FiMapPin } from "react-icons/fi";

const UmkmTable = () => {
  const [open, setOpen] = useState(false);
  const [detail, setDetail] = useState(null);

  // DATA DUMMY
  const data = [
    {
      toko: "Batik Sundara",
      tanggal: "12 Januari 2025",
      status: "Selesai",
      maps: "https://maps.google.com/?q=Kuningan+Jawa+Barat",
      items: [
        { nama: "Batik Tulis", qty: 2, price: 150000 },
        { nama: "Batik Cap", qty: 1, price: 100000 },
      ],
    },
  ];

  const openModal = (item) => {
    setDetail(item);
    setOpen(true);
  };

  const totalHarga = detail
    ? detail.items.reduce(
        (sum, item) => sum + item.qty * item.price,
        0
      )
    : 0;

  return (
    <>
      {/* TABLE */}
      <div className="border border-prestige-gold/40 bg-white p-5 rounded-xl shadow-sm">
        <h2 className="font-semibold text-lg mb-4">Riwayat UMKM</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="p-2 text-center">No</th>
                <th className="p-2 text-left">Nama Toko</th>
                <th className="p-2 text-center">Tanggal Pembelian</th>
                <th className="p-2 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, i) => (
                <tr key={i} className="text-center">
                  <td className="p-2">{i + 1}</td>
                  <td className="p-2 text-left font-medium">
                    {item.toko}
                  </td>
                  <td className="p-2">{item.tanggal}</td>
                  <td className="p-2">
                    <button
                      onClick={() => openModal(item)}
                      className="inline-flex items-center gap-1 px-3 py-1.5 text-xs rounded-lg border border-prestige-gold text-prestige-gold hover:bg-prestige-gold hover:text-white transition"
                    >
                      <FiEye />
                      Lihat Detail
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* MODAL */}
      {open && detail && (
        <div className="fixed inset-0 bg-black/50 z-[9999] flex items-center justify-center px-4">
          <div className="bg-white w-full max-w-xl rounded-2xl p-6 relative border border-prestige-gold/40">
            {/* CLOSE */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
            >
              <FiX size={20} />
            </button>

            {/* HEADER */}
            <h3 className="text-xl font-semibold mb-1">
              {detail.toko}
            </h3>
            <p className="text-sm text-gray-500 mb-3">
              {detail.tanggal}
            </p>

            <span className="inline-block mb-4 px-3 py-1 text-xs rounded-full bg-green-100 text-green-600">
              {detail.status}
            </span>

            {/* TABLE BARANG */}
            <div className="border rounded-xl overflow-hidden mb-4">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="p-2 text-left">Barang</th>
                    <th className="p-2 text-center">Qty</th>
                    <th className="p-2 text-right">Harga</th>
                    <th className="p-2 text-right">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {detail.items.map((item, i) => (
                    <tr key={i} className="border-t">
                      <td className="p-2">{item.nama}</td>
                      <td className="p-2 text-center">{item.qty}</td>
                      <td className="p-2 text-right">
                        Rp {item.price.toLocaleString()}
                      </td>
                      <td className="p-2 text-right font-semibold">
                        Rp {(item.qty * item.price).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* TOTAL */}
            <div className="flex justify-between items-center font-semibold text-lg mb-4">
              <span>Total Harga</span>
              <span className="text-prestige-gold">
                Rp {totalHarga.toLocaleString()}
              </span>
            </div>

            {/* LOKASI */}
            <div className="flex items-start gap-2 text-sm text-gray-600">
              <FiMapPin className="mt-0.5" />
              <a
                href={detail.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-prestige-gold transition"
              >
                Lihat lokasi toko di Google Maps
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UmkmTable;
