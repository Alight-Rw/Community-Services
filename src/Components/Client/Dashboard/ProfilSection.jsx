
import { FaEdit } from "react-icons/fa"

export function ProfileSection() {
  return (
    <div className="bg-gray-800 p-4 rounded-lg ">
      <img
        src="/image.png"
        alt="profile"
        className="mx-auto rounded-full mb-2 w-[125px]"
      />

      <div className="flex flex-col items-center">
        <h4 className="text-primary text-xs w-[145px] h-[18.51px]">
          Alice NIYOMUFASHA
        </h4>

        <p className="text-sm text-primary underline py-2">
          niyo.alice@codingschool.rw
        </p>

        {/* BUTTON */}
        <button
          className="mt-3 px-4 py-2 border border-primary rounded-full
          flex items-center gap-2 text-primary w-[168.06px] h-[33.48px]
          justify-center"
        >
          <FaEdit className="text-xs" />
          Edit Profile
        </button>
      </div>

      <div className="mt-6 pt-3 border-t border-primary">
        <p className="text-primary text-[16px] text-center">
          Last login: Today at 10:09 AM
        </p>
      </div>

    </div>
  );
}
