import CardArtikel from "./card";
import { FiFileText } from "react-icons/fi";
import { Link } from "react-router-dom";

const ListArtikel = () => {
  const articles = [
    {
      id: 1,
      title: "Pesona Alam Gunung Ciremai yang Wajib Dikunjungi",
      category: "Wisata",
      image:
        "https://i.pinimg.com/736x/14/ad/31/14ad3171038b99261210a9fbe6785d41.jpg",
    },
    {
      id: 2,
      title: "Kuliner Khas Kuningan yang Bikin Rindu Kampung",
      category: "Kuliner",
      image:
        "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/0896b65a-6d1e-4583-b60c-573359528121_Go-Biz_20220218_132132.jpeg",
    },
    {
      id: 3,
      title: "UMKM Lokal Kuningan yang Siap Go Digital",
      category: "UMKM",
      image:
        "https://pdbifiles.nos.jkt-1.neo.id/files/2018/08/05/oskm18_sappk_adriel_595839a1be7662943bad20c349ee8fa2ac09666f.jpg",
    },
    {
      id: 4,
      title: "Rekomendasi Tempat Healing di Kuningan",
      category: "Wisata",
      image:
        "https://pdbifiles.nos.jkt-1.neo.id/files/2018/08/05/oskm18_sappk_adriel_595839a1be7662943bad20c349ee8fa2ac09666f.jpg",
    },
    {
      id: 5,
      title: "Event Budaya Kuningan yang Wajib Dikunjungi",
      category: "Event",
      image:
        "https://pdbifiles.nos.jkt-1.neo.id/files/2018/08/05/oskm18_sappk_adriel_595839a1be7662943bad20c349ee8fa2ac09666f.jpg",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex items-center justify-between my-8">
        {/* Judul */}
        <h3 className="flex items-center gap-2 font-serif font-extralight tracking-widest uppercase text-prestige-gold text-base lg:text-2xl">
          <FiFileText className="text-lg lg:text-2xl" />
          Sekilas Artikel
        </h3>

        {/* Link */}
        <Link
          to="/artikel"
          className="text-sm lg:text-base font-medium text-prestige-gold/80 hover:text-prestige-gold transition flex items-center gap-1 group"
        >
          Lihat Semuanya
          <span className="group-hover:translate-x-1 transition">→</span>
        </Link>
      </div>
      {/* GRID UTAMA */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* ARTIKEL BESAR */}
        <div className="lg:col-span-3 hidden lg:block">
          <CardArtikel {...articles[0]} big />
        </div>

        {/* LIST ARTIKEL KECIL */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {articles.map((item, index) => (
            <CardArtikel
              key={item.id}
              {...item}
              // di HP & tablet → semua kecil
              // di desktop → skip artikel pertama (karena sudah jadi besar)
              className={index === 0 ? "lg:hidden" : ""}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ListArtikel;
