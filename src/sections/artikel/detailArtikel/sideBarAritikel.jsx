import RecommendationCard from "./cardRekomendasi";

const ArticleSidebar = () => {
  return (
    <aside className="sticky top-32 space-y-6">
      {/* Thumbnail */}
      <div className="relative h-[230px] rounded-xl overflow-hidden">
        <img
          src="https://i.pinimg.com/736x/14/ad/31/14ad3171038b99261210a9fbe6785d41.jpg"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Rekomendasi */}
      <RecommendationCard
        category="Teknologi"
        title="Masa Depan AI dan Dampaknya pada Dunia Kerja"
      />

      <RecommendationCard
        category="Inovasi"
        title="Startup Lokal yang Mendorong Ekonomi Digital"
      />

      <RecommendationCard
        category="Gaya Hidup"
        title="Cara Hidup Seimbang di Era Teknologi"
      />
    </aside>
  );
};

export default ArticleSidebar;
