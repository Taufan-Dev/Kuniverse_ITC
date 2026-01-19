import { useState } from "react";
import {
  FiCalendar,
  FiMapPin,
  FiUsers,
  FiShoppingCart,
  FiPlus,
  FiMinus,
  FiTrash,
} from "react-icons/fi";

const KulinerDetail = () => {
  /* ================= DATA ================= */
  const images = [
    "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg",
  ];

  const menus = [
    {
      id: 1,
      name: "Nasi Liwet Sunda",
      price: 25000,
      category: "makanan",
      image: "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg",
    },
    {
      id: 2,
      name: "Ayam Bakar",
      price: 30000,
      category: "makanan",
      image: "https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg",
    },
    {
      id: 3,
      name: "Es Teh Manis",
      price: 8000,
      category: "minuman",
      image: "https://images.pexels.com/photos/616836/pexels-photo-616836.jpeg",
    },
    {
      id: 4,
      name: "Es Jeruk",
      price: 10000,
      category: "minuman",
      image: "https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg",
    },
    {
      id: 5,
      name: "Pisang Goreng",
      price: 15000,
      category: "cemilan",
      image: "https://images.pexels.com/photos/461428/pexels-photo-461428.jpeg",
    },
  ];

  /* ================= STATE ================= */
  const [activeCategory, setActiveCategory] = useState("makanan");
  const [cart, setCart] = useState([]);
  const [people, setPeople] = useState(2);

  /* ================= LOGIC ================= */
  const filteredMenus = menus.filter(
    (menu) => menu.category === activeCategory,
  );

  const addToCart = (menu) => {
    setCart((prev) => {
      const exist = prev.find((item) => item.id === menu.id);
      if (exist) {
        return prev.map((item) =>
          item.id === menu.id ? { ...item, qty: item.qty + 1 } : item,
        );
      }
      return [...prev, { ...menu, qty: 1 }];
    });
  };

  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item,
      ),
    );
  };

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, qty: item.qty - 1 } : item))
        .filter((item) => item.qty > 0),
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  /* ================= UI ================= */
  return (
    <section className="container mx-auto pt-28 xl:px-20 md:px-10 px-4 grid xl:grid-cols-4 gap-12">
      {/* ================= KIRI ================= */}
      <div className="xl:col-span-3">
        {/* GALERI */}
        <img
          src={images[0]}
          alt="Restoran"
          className="w-full h-[260px] md:h-[420px] xl:h-[480px] object-cover rounded-2xl mb-10"
        />

        {/* HEADER */}
        <h1 className="text-3xl md:text-4xl font-serif font-semibold mb-2">
          Saung Liwet Kuningan
        </h1>

        <p className="flex items-center gap-2 text-gray-500 text-sm mb-6">
          <FiMapPin /> Cigugur, Kabupaten Kuningan
        </p>

        {/* DESKRIPSI */}
        <article className="text-gray-700 leading-relaxed space-y-4 mb-12">
          <p>
            Restoran khas Sunda dengan suasana alam yang asri, cocok untuk
            keluarga dan acara spesial.
          </p>
          <p>
            Menyajikan masakan tradisional dengan bahan segar dan cita rasa
            autentik khas Kuningan.
          </p>
        </article>

        {/* FILTER KATEGORI */}
        <div className="flex gap-3 mb-8">
          {[
            { key: "makanan", label: "🍛 Makanan" },
            { key: "minuman", label: "🥤 Minuman" },
            { key: "cemilan", label: "🍟 Cemilan" },
          ].map((item) => (
            <button
              key={item.key}
              onClick={() => setActiveCategory(item.key)}
              className={`px-5 py-2 rounded-full border text-sm font-medium transition
                ${
                  activeCategory === item.key
                    ? "bg-prestige-gold text-white"
                    : "hover:bg-prestige-gold/10"
                }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* MENU */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredMenus.map((menu) => (
            <div
              key={menu.id}
              className="border border-prestige-gold rounded-2xl overflow-hidden bg-white hover:shadow-md transition"
            >
              <img
                src={menu.image}
                alt={menu.name}
                className="h-40 w-full object-cover"
              />
              <div className="p-4 flex justify-between items-center">
                <div>
                  <h4 className="font-semibold">{menu.name}</h4>
                  <p className="text-prestige-gold font-semibold text-sm">
                    Rp {menu.price.toLocaleString()}
                  </p>
                </div>
                <button
                  onClick={() => addToCart(menu)}
                  className="p-3 rounded-full border hover:bg-prestige-gold hover:text-white transition"
                >
                  <FiShoppingCart />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= BOOKING DESKTOP ================= */}
      <div className="hidden xl:block sticky top-32 self-start">
        <BookingCard
          cart={cart}
          people={people}
          setPeople={setPeople}
          totalPrice={totalPrice}
          increaseQty={increaseQty}
          decreaseQty={decreaseQty}
          removeItem={removeItem}
        />
      </div>

      {/* ================= MOBILE BAR ================= */}
      <div className="xl:hidden fixed bottom-0 left-0 right-0 bg-white border-t p-4 z-50">
        <div className="flex justify-between mb-2 text-sm">
          <span>{cart.length} item</span>
          <span className="font-semibold text-prestige-gold">
            Rp {totalPrice.toLocaleString()}
          </span>
        </div>
        <button className="w-full bg-prestige-gold text-white py-3 rounded-xl font-semibold">
          Booking Sekarang
        </button>
      </div>
    </section>
  );
};

/* ================= BOOKING CARD ================= */
const BookingCard = ({
  cart,
  people,
  setPeople,
  totalPrice,
  increaseQty,
  decreaseQty,
  removeItem,
}) => {
  return (
    <div className="border border-prestige-gold/40 rounded-2xl p-6 bg-white shadow-sm">
      <h4 className="font-semibold text-lg mb-5">Booking Meja</h4>

      <label className="text-sm font-medium">Tanggal</label>
      <div className="flex items-center gap-2 border rounded-lg px-3 py-2 mb-4">
        <FiCalendar />
        <input type="date" className="w-full outline-none text-sm" />
      </div>

      <label className="text-sm font-medium">Jumlah Orang</label>
      <div className="flex items-center gap-2 border rounded-lg px-3 py-2 mb-6">
        <FiUsers />
        <input
          type="number"
          min="1"
          value={people}
          onChange={(e) => setPeople(Number(e.target.value))}
          className="w-full outline-none text-sm"
        />
      </div>

      {/* CART */}
      <div className="space-y-4 mb-6">
        {cart.length === 0 && (
          <p className="text-sm text-gray-500">Belum ada menu dipilih</p>
        )}

        {cart.map((item) => (
          <div key={item.id} className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium">{item.name}</p>
              <p className="text-xs text-gray-500">
                Rp {item.price.toLocaleString()}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button onClick={() => decreaseQty(item.id)}>
                <FiMinus />
              </button>
              <span className="text-sm">{item.qty}</span>
              <button onClick={() => increaseQty(item.id)}>
                <FiPlus />
              </button>
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 ml-2"
              >
                <FiTrash />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between font-semibold mb-6">
        <span>Total</span>
        <span className="text-prestige-gold">
          Rp {totalPrice.toLocaleString()}
        </span>
      </div>

      <button className="w-full bg-prestige-gold text-white py-3 rounded-xl font-semibold">
        Booking Sekarang
      </button>
    </div>
  );
};

export default KulinerDetail;
