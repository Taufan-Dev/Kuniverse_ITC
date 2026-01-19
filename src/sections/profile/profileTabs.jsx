const ProfileTabs = ({ activeTab, setActiveTab }) => {
  const tabClass = (tab) =>
    `text-sm font-semibold py-2 transition ${
      activeTab === tab
        ? "text-prestige-gold border-b-2 border-prestige-gold"
        : "text-gray-500 hover:text-gray-700"
    }`;

  return (
    <div className="mb-6">
      <div className="flex gap-5">
        <button
          onClick={() => setActiveTab("kuliner")}
          className={tabClass("kuliner")}
        >
          Kuliner
        </button>
        <button
          onClick={() => setActiveTab("wisata")}
          className={tabClass("wisata")}
        >
          Wisata
        </button>
        <button
          onClick={() => setActiveTab("umkm")}
          className={tabClass("umkm")}
        >
          UMKM
        </button>
      </div>
    </div>
  );
};

export default ProfileTabs;
