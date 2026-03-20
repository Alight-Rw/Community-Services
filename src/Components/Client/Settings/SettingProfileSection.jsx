import { useState } from "react";
import { MapPin, Phone, Mail, User } from "lucide-react";
import { FaEdit } from "react-icons/fa";
import EditProfileModal from "./EditProfileModal";
import { useProfile } from "../../../Hooks/useProfileHooks";

function SettingProfileSection() {
  const [isEditing, setIsEditing] = useState(false);
  const { data, loading } = useProfile();

  
  const userData = {
    name:
      data?.data?.firstName && data?.data?.lastName
        ? `${data.data.firstName} ${data.data.lastName}`
        : "—",
    email: data?.data?.email || "—",
    phone: data?.data?.phone || "—",
    location: data?.data?.location || "—",
    image: data?.data?.avatar || "/image.png",
  };

  if (loading) {
    return (
      <div className="w-full pr-3 pt-10">
        <div className="border border-hard-gray rounded-[20px] p-10 w-full bg-primary">
          <p>Loading profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full pr-3 pt-10">
      <div className="border border-hard-gray rounded-[20px] p-4 md:p-10 w-full bg-primary relative">

        {isEditing ? (
          <EditProfileModal
            user={{
              ...data.data, 
              name: userData.name,
              image: userData.image,
            }}
            onClose={() => setIsEditing(false)}
          />
        ) : (
          <>
           
            <div className="absolute top-2 right-4">
              <span className="bg-small-soft-blue text-sky-blue text-xs md:text-sm font-bold px-3 py-1 rounded-full">
                Premium
              </span>
            </div>

            <div className="flex flex-col md:flex-row gap-6 md:gap-16 items-start">

             
              <div className="flex flex-col items-center">
                <img
                  src={userData.image}
                  alt="profile"
                  className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-secondary object-cover"
                />

             
              </div>

           
              <div className="flex-1 w-full">
                <h1 className="text-lg md:text-2xl font-bold mb-6">
                  {userData.name}
                </h1>

                <div className="space-y-4">

                  <div className="flex items-center gap-3">
                    <Mail className="text-secondary" size={20} />
                    <div>
                      <p className="text-xs text-hard-gray font-semibold">
                        Email
                      </p>
                      <p className="text-sm md:text-lg">
                        {userData.email}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="text-secondary" size={20} />
                    <div>
                      <p className="text-xs text-hard-gray font-semibold">
                        Phone
                      </p>
                      <p className="text-sm md:text-lg">
                        {userData.phone}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <MapPin className="text-secondary" size={20} />
                    <div>
                      <p className="text-xs text-hard-gray font-semibold">
                        Location
                      </p>
                      <p className="text-sm md:text-lg">
                        {userData.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <User className="text-secondary" size={20} />
                    <div>
                      <p className="text-xs text-hard-gray font-semibold">
                        Member Since
                      </p>
                      <p className="text-sm md:text-lg">
                        {data?.data?.createdAt
                          ? new Date(data.data.createdAt).toLocaleDateString("en-US", {
                              month: "long",
                              year: "numeric",
                            })
                          : "—"}
                      </p>
                    </div>
                  </div>

                 
                  <button
                    onClick={() => setIsEditing(true)}
                    className="w-full bg-sky-blue text-primary py-2 md:py-4 rounded-lg flex items-center justify-center gap-2 font-semibold text-sm md:text-lg hover:opacity-90 transition"
                  >
                    <FaEdit size={18} />
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