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
    <div className="dashboard-panel p-4 rounded-lg border">
      <div className=" flex justify-between items-center rounded-full mb-2 w-full">
        <img
        src={user?.avatar || placeholder.avatar}
        alt="profile"
        className="mx-auto rounded-full w-[125px] h-[125px]"
      />
      </div>
      

      <div className="flex flex-col items-center">
        <h4 className="text-[var(--dashboard-text)] font-bold">
          {loading
            ? `${placeholder.firstName} ${placeholder.lastName}`
            : user?.firstName + " " + user?.lastName}
        </h4>

        <p className="text-sm dashboard-muted">{loading ? placeholder.email : user?.email}</p>

        {error && <p className="text-red-500 mt-2">{error}</p>}

        <button
          onClick={() => navigate("/settings")}
          className="mt-3 px-4 py-2 border border-secondary rounded-full
          flex items-center gap-2 text-secondary justify-center dashboard-hover"
        >
          <FaEdit className="text-xs" />
          Edit Profile
        </button>
      </div>

      <div className="mt-6 pt-3 border-t dashboard-border">
        <p className="dashboard-muted text-[16px] text-center">
          Last login: Today
        </p>
      </div>
    </div>
  );
}
