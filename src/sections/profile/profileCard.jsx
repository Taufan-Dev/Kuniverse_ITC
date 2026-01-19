import { useState } from "react";
import { FiMail, FiMapPin, FiEdit, FiX } from "react-icons/fi";

const Profile = () => {
  const [showModal, setShowModal] = useState(false);

  const [profile, setProfile] = useState({
    name: "Saung Liwet Kuningan",
    email: "saungliwet@kuniverse.id",
    address: "Jl. Cigugur Raya No. 15, Kabupaten Kuningan",
    image:
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=400",
    password: "",
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    setShowModal(false);
  };

  return (
    <>
      {/* PROFILE CARD */}
      <section className="max-w-md">
        <div className="bg-white border rounded-2xl shadow-sm overflow-hidden text-center">
          {/* HEADER */}
          <div className="h-28 bg-gradient-to-r from-prestige-gold/30 to-prestige-gold/10"></div>

          {/* PHOTO */}
          <div className="-mt-14 flex justify-center">
            <img
              src={profile.image}
              alt={profile.name}
              className="w-28 h-28 rounded-full border-4 border-white object-cover shadow-sm"
            />
          </div>

          {/* BODY */}
          <div className="px-6 pb-6 pt-4">
            <h3 className="text-lg font-semibold text-gray-800">
              {profile.name}
            </h3>

            <div className="flex justify-center items-center gap-2 text-sm text-gray-600 mt-2">
              <FiMail className="text-prestige-gold" />
              <span>{profile.email}</span>
            </div>

            <div className="flex justify-center items-start gap-2 text-sm text-gray-600 mt-2">
              <FiMapPin className="text-prestige-gold mt-0.5" />
              <span className="text-center">{profile.address}</span>
            </div>

            {/* BUTTON */}
            <button
              onClick={() => setShowModal(true)}
              className="mt-6 w-full flex items-center justify-center gap-2 border border-prestige-gold text-prestige-gold rounded-xl py-2 text-sm font-medium hover:bg-prestige-gold hover:text-white transition"
            >
              <FiEdit />
              Kelola Profil
            </button>
          </div>
        </div>
      </section>

      {/* MODAL EDIT PROFILE */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-4">
          <div className="bg-white w-full max-w-md rounded-2xl p-6 relative shadow-lg">
            {/* CLOSE */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute right-4 top-4 text-gray-500 hover:text-red-500"
            >
              <FiX size={20} />
            </button>

            <h3 className="text-lg font-semibold mb-6 text-center">
              Edit Profil
            </h3>

            <form onSubmit={handleSave} className="space-y-4">
              {/* NAMA */}
              <div>
                <label className="text-sm font-medium">Nama</label>
                <input
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-3 py-2 text-sm mt-1 outline-none focus:ring-2 focus:ring-prestige-gold"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-3 py-2 text-sm mt-1 outline-none focus:ring-2 focus:ring-prestige-gold"
                />
              </div>

              {/* PASSWORD */}
              <div>
                <label className="text-sm font-medium">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="********"
                  onChange={handleChange}
                  className="w-full border rounded-lg px-3 py-2 text-sm mt-1 outline-none focus:ring-2 focus:ring-prestige-gold"
                />
              </div>

              {/* ALAMAT */}
              <div>
                <label className="text-sm font-medium">Alamat</label>
                <textarea
                  name="address"
                  value={profile.address}
                  onChange={handleChange}
                  rows="3"
                  className="w-full border rounded-lg px-3 py-2 text-sm mt-1 outline-none focus:ring-2 focus:ring-prestige-gold"
                />
              </div>

              {/* ACTION */}
              <button
                type="submit"
                className="w-full bg-prestige-gold text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
              >
                Simpan Perubahan
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
