import { useState } from "react";
import ProfileCard from "../../sections/profile/profileCard";
import ProfileTabs from "../../sections/profile/profileTabs";
import KulinerTable from "../../sections/profile/kulinerTable";
import WisataTable from "../../sections/profile/wisataTable";
import UmkmTable from "../../sections/profile/umkmTable";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("kuliner");

  // Dummy data (nanti ganti dari backend)
  const kuliner = [
    {
      nama: "Saung Liwet",
      tanggal: "12-06-2025",
      menu: "Nasi Liwet",
      total: 120000,
    },
  ];

  const wisata = [
    { nama: "Telaga Biru", tanggal: "20-06-2025", jumlah: 3, total: 45000 },
  ];

  const umkm = [
    { nama: "Batik Kuningan", tanggal: "22-06-2025", qty: 2, total: 300000 },
  ];

  const profile = {
    name: "Taufan Hidayatul Akbar",
    email: "taufan@mail.com",
    created_at: "2024-01-01",
    point: 320,
  };

  return (
    <div className="bg-white pt-30 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ProfileCard profile={profile} />

        <div className="md:col-span-2">
          <ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab} />

          {activeTab === "kuliner" && <KulinerTable data={kuliner} />}
          {activeTab === "wisata" && <WisataTable data={wisata} />}
          {activeTab === "umkm" && <UmkmTable data={umkm} />}
        </div>
      </div>
    </div>
  );
};

export default Profile;
