import React, { useState } from 'react';

// --- DATA PRODUK ---
const products = [
  {
    id: 1,
    name: "Peuyeum Ketan Ember",
    category: "Makanan",
    desc: "Camilan khas Cibeureum dengan rasa manis alami.",
    fullDesc: "Peuyeum ketan hitam asli yang difermentasi secara tradisional menggunakan ragi pilihan. Dikemas dalam ember food-grade yang aman dan praktis.",
    price: 45000, 
    rating: 4.8,
    reviews: 120,
    stock: "Tersedia",
    location: "Cibeureum",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80",
    tag: "BEST SELLER"
  },
  {
    id: 2,
    name: "Sirup Jeniper",
    category: "Minuman",
    desc: "Minuman segar asli perasan jeruk nipis Kuningan.",
    fullDesc: "Sirup Jeniper (Jeruk Nipis Peras) adalah minuman kesehatan khas Kuningan yang kaya akan Vitamin C. Tanpa pemanis buatan.",
    price: 32500,
    rating: 4.7,
    reviews: 85,
    stock: "Stok Menipis",
    location: "Ciawigebang",
    image: "https://images.pexels.com/photos/1304541/pexels-photo-1304541.jpeg?auto=compress&cs=tinysrgb&w=600",
    tag: null
  },
  {
    id: 3,
    name: "Lampu Hias Bambu",
    category: "Kerajinan",
    desc: "Kerajinan tangan anyaman bambu premium.",
    fullDesc: "Lampu hias estetik dari bambu wulung pilihan. Dianyam oleh pengrajin lokal profesional.",
    price: 120000,
    rating: 4.9,
    reviews: 42,
    stock: "Pre-Order",
    location: "Cigugur",
    image: "https://images.pexels.com/photos/1797103/pexels-photo-1797103.jpeg?auto=compress&cs=tinysrgb&w=600",
    tag: null
  },
  {
    id: 4,
    name: "Kopi Arabika Ciremai",
    category: "Minuman",
    desc: "Kopi lereng gunung Ciremai dengan aroma khas.",
    fullDesc: "Biji kopi Arabika pilihan yang ditanam di kaki Gunung Ciremai (1200 mdpl). Notes fruity dan floral dengan acidity seimbang.",
    price: 67500,
    originalPrice: 75000,
    rating: 4.8,
    reviews: 215,
    stock: "Tersedia",
    location: "Palutungan",
    image: "https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=600",
    tag: "DISKON 10%"
  },
  {
    id: 5,
    name: "Hucap Ma Iroh",
    category: "Makanan",
    desc: "Tahu kupat legendaris dengan bumbu kacang kental.",
    fullDesc: "Sarapan khas Kuningan berupa tahu goreng dan ketupat yang disiram bumbu kacang kental manis gurih.",
    price: 15000,
    rating: 4.9,
    reviews: 350,
    stock: "Tersedia",
    location: "Kuningan Kota",
    image: "https://images.unsplash.com/photo-1625683328243-92b63752a235?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    tag: "LEGENDARIS"
  },
  {
    id: 6,
    name: "Opak Bakar",
    category: "Camilan",
    desc: "Kerupuk ketan bakar renyah khas Mandirancan.",
    fullDesc: "Opak ketan yang dipanggang di atas bara api hingga mengembang sempurna. Tekstur renyah, rasa gurih asin.",
    price: 25000,
    rating: 4.6,
    reviews: 90,
    stock: "Tersedia",
    location: "Mandirancan",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=600&q=80",
    tag: null
  },
  {
    id: 7,
    name: "Keripik Gemblong",
    category: "Camilan",
    desc: "Olahan singkong pedas manis yang bikin nagih.",
    fullDesc: "Keripik dari singkong pilihan yang diiris tipis lalu digoreng garing dan dibalut bumbu balado pedas manis.",
    price: 12000,
    rating: 4.7,
    reviews: 150,
    stock: "Tersedia",
    location: "Ciawigebang",
    image: "https://plus.unsplash.com/premium_photo-1672753747124-2bd4da9931fa?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag: "MURAH"
  },
  {
    id: 8,
    name: "Batik Kuda Si Windu",
    category: "Fashion",
    desc: "Kain batik tulis motif ikonik Kuningan.",
    fullDesc: "Kain batik katun prima dengan motif Kuda Si Windu yang melambangkan semangat dan kekuatan masyarakat Kuningan.",
    price: 175000,
    rating: 5.0,
    reviews: 25,
    stock: "Pre-Order",
    location: "Cigugur",
    image: "https://images.unsplash.com/photo-1543874835-ad7d64196a07?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag: "PREMIUM"
  }
];

// Helper untuk format Rupiah
const formatRupiah = (number) => {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(number);
};

const Umkm = () => {
  const [isCartOpen, setIsCartOpen] = useState(false); // Ganti isChatOpen jadi isCartOpen
  const [cartItems, setCartItems] = useState([]); // State untuk menyimpan item keranjang
  const [addedProduct, setAddedProduct] = useState(null); 
  const [detailProduct, setDetailProduct] = useState(null); 

  // Handler Tambah ke Keranjang
  const handleAddToCart = (product, e) => {
    e?.stopPropagation(); 
    
    setCartItems(prevItems => {
      // Cek apakah item sudah ada di keranjang
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        // Jika ada, tambahkan qty nya
        return prevItems.map(item => 
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        // Jika belum, masukkan item baru dengan qty 1
        return [...prevItems, { ...product, qty: 1 }];
      }
    });

    setAddedProduct(product); // Tampilkan popup sukses
  };

  // Handler Hapus dari Keranjang
  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  // Hitung Total Harga
  const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const totalItems = cartItems.reduce((acc, item) => acc + item.qty, 0);

  return (
    <div className="bg-[#FDFCF9] min-h-screen font-sans text-gray-800 relative">
      
      {/* --- 1. POPUP DETAIL PRODUK --- */}
      {detailProduct && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setDetailProduct(null)}></div>
          
          <div className="bg-white rounded-3xl overflow-hidden w-full max-w-4xl relative z-10 shadow-2xl flex flex-col md:flex-row animate-in zoom-in-95 duration-300 h-[85vh] md:h-auto">
            <div className="w-full md:w-1/2 bg-gray-100 relative h-64 md:h-auto">
              <img src={detailProduct.image} alt={detailProduct.name} className="w-full h-full object-cover" />
              <button onClick={() => setDetailProduct(null)} className="absolute top-4 left-4 md:hidden bg-white/50 p-2 rounded-full backdrop-blur-md">
                <span className="material-icons-round">arrow_back</span>
              </button>
            </div>

            <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col h-full overflow-y-auto">
              <div className="flex justify-between items-start mb-4">
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  {detailProduct.category}
                </span>
                <button onClick={() => setDetailProduct(null)} className="hidden md:block text-gray-400 hover:text-gray-600 cursor-pointer">
                  <span className="material-icons-round text-2xl">close</span>
                </button>
              </div>

              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-2">{detailProduct.name}</h2>
              <div className="flex items-center gap-4 mb-6">
                 <span className="text-3xl font-bold text-[#C5A059]">{formatRupiah(detailProduct.price)}</span>
              </div>

              <div className="flex items-center gap-2 mb-6 text-sm border-y border-gray-100 py-4">
                 <span className="material-icons-round text-orange-400">star</span>
                 <span className="font-bold text-gray-900 text-lg">{detailProduct.rating}</span>
                 <span className="text-gray-400">/ 5.0</span>
                 <span className="w-1 h-1 bg-gray-300 rounded-full mx-2"></span>
                 <span className="text-gray-600 underline decoration-gray-300 underline-offset-4">{detailProduct.reviews} Ulasan</span>
              </div>

              <div className="mb-8 flex-1">
                 <h4 className="font-bold text-gray-900 mb-2">Deskripsi Produk</h4>
                 <p className="text-gray-600 leading-relaxed text-sm">
                   {detailProduct.fullDesc}
                 </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-auto pt-4 border-t border-gray-100">
                 <button 
                    onClick={(e) => {
                       handleAddToCart(detailProduct, e);
                       setDetailProduct(null);
                    }}
                    className="w-full py-3.5 px-4 rounded-xl bg-[#C5A059] text-white font-bold hover:bg-[#b08d4b] transition-colors shadow-lg shadow-[#C5A059]/20 flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
                 >
                    <span className="material-icons-round text-xl">add_shopping_cart</span> 
                    <span>Masuk Keranjang</span>
                 </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- 2. POPUP SUKSES KERANJANG --- */}
      {addedProduct && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setAddedProduct(null)}></div>
          <div className="bg-white rounded-3xl p-6 w-full max-w-sm relative z-10 shadow-2xl animate-in zoom-in-95 duration-300">
            <button onClick={() => setAddedProduct(null)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 cursor-pointer"><span className="material-icons-round">close</span></button>
            <div className="text-center pt-2">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-green-50"><span className="material-icons-round text-3xl">check</span></div>
              <h3 className="font-serif font-bold text-2xl text-gray-900 mb-1">Berhasil!</h3>
              <p className="text-gray-500 text-sm mb-6">Produk masuk keranjang.</p>
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-3 flex items-center gap-4 mb-8 text-left">
                <img src={addedProduct.image} alt={addedProduct.name} className="w-16 h-16 rounded-xl object-cover shadow-sm" />
                <div><h4 className="font-bold text-gray-800 text-sm line-clamp-1">{addedProduct.name}</h4><p className="text-[#C5A059] font-bold text-sm mt-0.5">{formatRupiah(addedProduct.price)}</p></div>
              </div>
              <div className="flex gap-3">
                <button onClick={() => setAddedProduct(null)} className="flex-1 py-3.5 rounded-xl border border-gray-200 font-bold text-gray-600 hover:bg-gray-50 text-sm cursor-pointer">Lanjut Belanja</button>
                <button onClick={() => { setAddedProduct(null); setIsCartOpen(true); }} className="flex-1 py-3.5 rounded-xl bg-[#C5A059] text-white font-bold hover:bg-[#b08d4b] text-sm shadow-lg cursor-pointer">Lihat Keranjang</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- HEADER --- */}
      <header className="pt-32 pb-12 text-center max-w-4xl mx-auto px-6">
        <h2 className="font-serif text-5xl md:text-6xl text-[#C5A059] mb-6 drop-shadow-sm font-bold">UMKM Kuningan</h2>
        <p className="text-gray-600 text-lg leading-relaxed font-medium">Temukan produk lokal unggulan dari UMKM terbaik di Kabupaten Kuningan.</p>
      </header>

      {/* --- PRODUCT GRID --- */}
      <main className="max-w-7xl mx-auto px-6 pb-24">
        {/* Filter Buttons */}
        <div className="mb-8 flex gap-3 overflow-x-auto pb-2">
            <button className="bg-[#C5A059] text-white px-6 py-2.5 rounded-full whitespace-nowrap text-sm font-bold shadow-md cursor-pointer">Semua Produk</button>
            <button className="bg-white border border-gray-300 px-6 py-2.5 rounded-full whitespace-nowrap text-sm font-bold text-gray-600 hover:border-[#C5A059] transition-colors cursor-pointer">Makanan</button>
            <button className="bg-white border border-gray-300 px-6 py-2.5 rounded-full whitespace-nowrap text-sm font-bold text-gray-600 hover:border-[#C5A059] transition-colors cursor-pointer">Kerajinan</button>
        </div>
        
        {/* GRID DISPLAY */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((item) => (
            <div 
                key={item.id} 
                onClick={() => setDetailProduct(item)} 
                className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full cursor-pointer"
            >
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                {item.tag && (<div className={`absolute top-3 ${item.tag.includes('DISKON') ? 'left-3 bg-red-600 text-white' : 'right-3 bg-white text-[#C5A059]'} px-3 py-1 rounded-lg text-xs font-bold shadow-md`}>{item.tag}</div>)}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white/90 backdrop-blur px-4 py-2 rounded-full text-xs font-bold text-gray-800 shadow-sm transform translate-y-4 group-hover:translate-y-0 transition-transform">Lihat Detail</span>
                </div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                
                <div className="flex items-center gap-1.5 mb-2">
                  <span className="material-icons-round text-orange-400 text-sm">star</span>
                  <span className="text-sm font-bold text-gray-900">{item.rating}</span>
                  <span className="text-gray-300 text-xs">•</span>
                  <span className="text-xs text-gray-500">{item.reviews} ulasan</span>
                </div>

                <h3 className="font-bold text-lg mb-1 text-gray-900 group-hover:text-[#C5A059] transition-colors line-clamp-1">{item.name}</h3>
                
                <div className="flex items-center gap-1 text-gray-400 text-xs mb-3">
                    <span className="material-icons-round text-[14px]">location_on</span>
                    {item.location}
                </div>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                  <div>
                    <span className="text-[#C5A059] font-bold text-xl block">{formatRupiah(item.price)}</span>
                  </div>
                  <button 
                    onClick={(e) => handleAddToCart(item, e)}
                    className="w-10 h-10 rounded-full bg-gray-100 text-gray-600 hover:bg-[#C5A059] hover:text-white active:scale-90 transition-all flex items-center justify-center shadow-sm z-10 cursor-pointer"
                  >
                    <span className="material-icons-round text-xl">add_shopping_cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* --- CART FLOATING BUTTON & POPUP (YANG DIUBAH) --- */}
      <div className="fixed bottom-8 right-8 z-50">
         
         {/* POPUP KERANJANG BELANJA */}
         {isCartOpen && (
          <div className="w-[350px] bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col mb-4 animate-in slide-in-from-bottom-5 fade-in duration-300">
             
             {/* Header Keranjang */}
             <div className="p-4 flex justify-between items-center border-b border-gray-100 bg-white">
                <h3 className="text-[#C5A059] font-bold text-lg tracking-tight flex items-center gap-2">
                  <span className="material-icons-round">shopping_bag</span>
                  Keranjang ({totalItems})
                </h3>
                <button onClick={() => setIsCartOpen(false)} className="text-gray-400 hover:text-gray-600 cursor-pointer">
                  <span className="material-icons-round">close</span>
                </button>
             </div>

             {/* List Item Keranjang */}
             <div className="max-h-[350px] overflow-y-auto bg-gray-50 p-2">
                {cartItems.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-10 text-gray-400">
                    <span className="material-icons-round text-4xl mb-2 text-gray-300">remove_shopping_cart</span>
                    <p className="text-sm">Keranjang masih kosong</p>
                  </div>
                ) : (
                  cartItems.map((item, index) => (
                     <div key={index} className="flex gap-3 p-3 bg-white rounded-xl border border-gray-100 shadow-sm mb-2 relative group">
                        <div className="relative shrink-0 w-16 h-16">
                          <img src={item.image} alt={item.name} className="w-full h-full rounded-lg object-cover" />
                        </div>
                        <div className="flex-1 min-w-0 flex flex-col justify-center">
                           <h4 className="font-bold text-sm text-gray-800 truncate">{item.name}</h4>
                           <p className="text-[#C5A059] font-bold text-xs mt-1">
                             {formatRupiah(item.price)} <span className="text-gray-400 font-normal">x {item.qty}</span>
                           </p>
                        </div>
                        {/* Tombol Hapus Kecil */}
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="absolute top-2 right-2 text-gray-300 hover:text-red-500 cursor-pointer"
                        >
                          <span className="material-icons-round text-lg">delete</span>
                        </button>
                     </div>
                  ))
                )}
             </div>

             {/* Footer Total & Checkout */}
             <div className="p-4 bg-white border-t border-gray-100">
               <div className="flex justify-between items-center mb-4">
                 <span className="text-gray-500 text-sm">Total Belanja</span>
                 <span className="font-bold text-xl text-[#C5A059]">{formatRupiah(totalPrice)}</span>
               </div>
               <button className="w-full py-3 rounded-xl bg-[#C5A059] text-white font-bold hover:bg-[#b08d4b] shadow-lg shadow-[#C5A059]/20 transition-colors cursor-pointer text-sm">
                 CHECKOUT SEKARANG
               </button>
             </div>
          </div>
         )}

        {/* TOMBOL FLOATING KERANJANG */}
        <div className="flex justify-end">
            <button onClick={() => setIsCartOpen(!isCartOpen)} className="bg-[#C5A059] text-white p-4 rounded-full shadow-xl hover:bg-[#b08d4b] hover:-translate-y-1 transition-all flex items-center gap-3 pr-6 cursor-pointer border-4 border-white group">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <span className="material-icons-round text-2xl">{isCartOpen ? 'close' : 'shopping_basket'}</span>
              </div>
              <div className="flex flex-col items-start leading-tight">
                <span className="font-bold tracking-wide text-sm">KERANJANG</span>
                {totalItems > 0 && <span className="text-[10px] opacity-90">{totalItems} Item | {formatRupiah(totalPrice)}</span>}
              </div>
            </button>
        </div>
      </div>
    </div>
  );
};

export default Umkm;