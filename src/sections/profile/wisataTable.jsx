const WisataTable = ({ data }) => {
  return (
    <div className="border border-prestige-gold/40 bg-white p-5 rounded-xl shadow-sm">
      <h2 className="font-semibold text-lg mb-4">Riwayat Wisata</h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-gray-50">
            <tr>
              <th className="th">No</th>
              <th className="th">Destinasi</th>
              <th className="th">Tanggal Kunjungan</th>
              <th className="th">Jumlah Tiket</th>
              <th className="th">Total</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr key={i} className="text-center">
                <td className="td">{i + 1}</td>
                <td className="td">{item.nama}</td>
                <td className="td">{item.tanggal}</td>
                <td className="td">{item.jumlah}</td>
                <td className="td font-semibold text-prestige-gold">
                  Rp {item.total.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-red-500 mt-10">Note : Tiket Dikirim Melalui Email Yang Terdaftar</p>
      </div>
    </div>
  );
};

export default WisataTable;
