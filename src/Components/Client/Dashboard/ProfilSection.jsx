import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useProfile } from "../../../Hooks/useProfileHooks";

export function ProfileSection() {
  const navigate = useNavigate();
  const { data, loading, error } = useProfile();
  const user = data?.data;

  const placeholder = {
    avatar: "/image.png",
    firstName: " First Name",
    lastName: "Last Name",
    email: "email@example.com",
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <div className=" flex justify-between items-center rounded-full mb-2 w-full">
        <img
        src={user?.avatar || placeholder.avatar}
        alt="profile"
        className="mx-auto rounded-full w-[125px] h-[125px]"
      />
      </div>
      

      <div className="flex flex-col items-center">
        <h4 className="text-primary">
          {loading
            ? `${placeholder.firstName} ${placeholder.lastName}`
            : user?.firstName + " " + user?.lastName}
        </h4>

        <p className="text-sm text-primary">{loading ? placeholder.email : user?.email}</p>

        {error && <p className="text-red-500 mt-2">{error}</p>}

        <button
          onClick={() => navigate("/settings")}
          className="mt-3 px-4 py-2 border border-primary rounded-full
          flex items-center gap-2 text-primary justify-center"
        >
          <FaEdit className="text-xs" />
          Edit Profile
        </button>
      </div>

      <div className="mt-6 pt-3 border-t border-primary">
        <p className="text-primary text-[16px] text-center">
          Last login: Today
        </p>
      </div>
    </div>
  );
}