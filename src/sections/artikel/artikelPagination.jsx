const ArtikelPagination = () => {
  return (
    <div className="flex justify-center mt-10 mb-10">
      <div className="flex gap-2">
        <button className="px-3 h-8 rounded bg-gray-300 text-gray-500">
          ‹
        </button>
        <button className="px-3 h-8 rounded bg-prestige-gold text-white">1</button>
        <button className="px-3 h-8 rounded bg-gray-200 hover:bg-prestige-gold hover:text-white">
          2
        </button>
      </div>
    </div>
  );
};

export default ArtikelPagination;
