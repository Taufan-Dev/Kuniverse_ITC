const GambarWisata = ({ images }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
      {/* Gambar besar */}
      <div className="md:col-span-2 md:row-span-2 overflow-hidden rounded-2xl h-[260px] md:h-[360px]">
        <img
          src={images[0]}
          alt="Wisata utama"
          className="w-full h-full object-cover hover:scale-105 transition duration-700"
        />
      </div>

      {/* Gambar kecil */}
      {images.slice(1).map((img, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-2xl h-[180px] md:h-[170px]"
        >
          <img
            src={img}
            alt={`Wisata ${index + 1}`}
            className="w-full h-full object-cover hover:scale-110 transition duration-700"
          />
        </div>
      ))}
    </div>
  );
};

export default GambarWisata;
