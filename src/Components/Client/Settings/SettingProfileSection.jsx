import { useState } from "react";
import { MapPin, Phone, Mail, User } from "lucide-react";
import { FaEdit } from "react-icons/fa";
import EditProfileModal from "./EditProfileModal";

function SettingProfileSection() {
  const [isEditing, setIsEditing] = useState(false);

  const userData = {
    name: "Alice Niyomufasha",
    email: "jackson74@gmail.com",
    phone: "+250788888888",
    location: "Kigali, Rwanda",
    image: "/image.png",
  };

  return (
    <div className="w-full p-5 md:p-6">
      <div className="border border-hard-gray rounded-[20px] p-6 md:p-10 w-full bg-primary relative">

        {/* ✅ Si on est en mode édition → afficher EditProfileModal */}
        {isEditing ? (
          <EditProfileModal
            user={userData}
            onClose={() => setIsEditing(false)}
          />
        ) : (
          <>
            {/* BADGE */}
            <div className="absolute top-0 sm:top-3 md:top-5 lg:top-6 right-6">
              <span className="bg-small-soft-blue text-sky-blue text-xs font-bold px-4 py-1 rounded-full">
                Premium
              </span>
            </div>

            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
              
              {/* IMAGE */}
              <div className="flex flex-col items-center">
                <img
                  src={userData.image}
                  alt="profile"
                  className="w-48 h-48 rounded-full border-4 border-secondary object-cover"
                />
                <button className="text-secondary border-2 border-secondary rounded-xl py-2 px-8 mt-4 font-medium">
                  Change Photo
                </button>
              </div>

              {/* INFOS */}
              <div className="flex-1 w-full">
                <h1 className="text-2xl font-bold mb-8">
                  {userData.name}
                </h1>

                <div className="space-y-6">

                  <div className="flex items-center gap-4">
                    <Mail className="text-secondary" size={24} />
                    <div>
                      <p className="text-xs text-hard-gray font-semibold">
                        Email
                      </p>
                      <p className="text-lg">{userData.email}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <Phone className="text-secondary" size={24} />
                    <div>
                      <p className="text-xs text-hard-gray font-semibold">
                        Phone
                      </p>
                      <p className="text-lg">{userData.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <MapPin className="text-secondary" size={24} />
                    <div>
                      <p className="text-xs text-hard-gray font-semibold">
                        Location
                      </p>
                      <p className="text-lg">{userData.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <User className="text-secondary" size={24} />
                    <div>
                      <p className="text-xs text-hard-gray font-semibold">
                        Member Since
                      </p>
                      <p className="text-lg">January 2024</p>
                    </div>
                  </div>

                  {/* EDIT BUTTON */}
                  <button
                    onClick={() => setIsEditing(true)}
                    className="w-full bg-sky-blue text-primary py-4 rounded-xl flex items-center justify-center gap-3 font-bold text-lg hover:opacity-90 transition"
                  >
                    <FaEdit size={20} />
                    Edit Profile
                  </button>

                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default SettingProfileSection;