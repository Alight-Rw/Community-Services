import { useState } from "react";
import { Save, X } from "lucide-react";

function EditProfileModal({ user, onClose }) {
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    phone: user.phone,
    location: user.location,
    image: user.image,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        image: URL.createObjectURL(file),
      });
    }
  };

  const handleSave = () => {
    console.log("Updated:", formData);
    onClose();
  };

  return (
    // <div
    //   className=" bg-primary rounded-2xl border border-hard-gray p-6 sm:p-8 shadow-xl"
    // >
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 bg-primary">
        {/* IMAGE */}
        <div className="flex flex-col items-center md:w-1/3">
          <img
            src={formData.image}
            alt="profile"
            className="
              w-28 h-28
              sm:w-32 sm:h-32
              md:w-40 md:h-40
              rounded-full
              object-cover
              border-4 border-sky-blue
            "
          />

          <label className="mt-4 cursor-pointer text-sky-blue border border-sky-blue px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary transition">
            Change Photo
            <input
              type="file"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>
        </div>

        {/* FORM */}
        <div className="flex-1 space-y-5">
          <div>
            <label className="block text-sm font-semibold mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-universal border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-blue"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-universal border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-blue"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-universal border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-blue"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full bg-universal border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-blue"
            />
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={handleSave}
              className="flex-1 bg-sky-blue hover:opacity-90 text-primary py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition"
            >
              <Save size={18} />
              Save Changes
            </button>

            <button
              onClick={onClose}
              className="flex-1 bg-universal hover:bg-gray-300 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition"
            >
              <X size={18} />
              Cancel
            </button>
          </div>
        </div>
      </div>
    // </div>
  );
}

export default EditProfileModal;
