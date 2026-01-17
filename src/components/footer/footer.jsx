import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="relative mt-24 border-t border-gray-100 bg-white">
      {/* aksen gradient halus */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-prestige-gold/40 to-transparent" />

      <div className="px-5 md:px-10 xl:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div>
            <h3 className="font-serif tracking-widest uppercase text-prestige-gold text-lg">
              KuniVerse
            </h3>
            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              Gerbang digital untuk menjelajahi wisata, kuliner, dan UMKM lokal
              terbaik di Kabupaten Kuningan.
            </p>
          </div>

          {/* Menu */}
          <div>
            <h4 className="text-sm font-semibold text-gray-800 mb-4">
              Menu
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="/" className="hover:text-prestige-gold transition">Beranda</a></li>
              <li><a href="/wisata" className="hover:text-prestige-gold transition">Wisata</a></li>
              <li><a href="/kuliner" className="hover:text-prestige-gold transition">Kuliner</a></li>
              <li><a href="/umkm" className="hover:text-prestige-gold transition">UMKM</a></li>
              <li><a href="/artikel" className="hover:text-prestige-gold transition">Artikel</a></li>
            </ul>
          </div>

          {/* Layanan */}
          <div>
            <h4 className="text-sm font-semibold text-gray-800 mb-4">
              Layanan
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Informasi Wisata</li>
              <li>Reservasi Kuliner</li>
              <li>Produk UMKM Lokal</li>
              <li>Artikel & Edukasi</li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="text-sm font-semibold text-gray-800 mb-4">
              Kontak
            </h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <FiMapPin className="text-prestige-gold" />
                Kuningan, Jawa Barat
              </li>
              <li className="flex items-center gap-2">
                <FiMail className="text-prestige-gold" />
                info@kuniverse.id
              </li>
              <li className="flex items-center gap-2">
                <FiPhone className="text-prestige-gold" />
                +62 8xxx xxxx xxxx
              </li>
            </ul>
          </div>
        </div>

        {/* bottom */}
        <div className="mt-12 pt-6 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="font-serif tracking-widest text-prestige-gold uppercase">
              Tim Bos Udin
            </span>. All rights reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-prestige-gold transition">Kebijakan Privasi</a>
            <a href="#" className="hover:text-prestige-gold transition">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
