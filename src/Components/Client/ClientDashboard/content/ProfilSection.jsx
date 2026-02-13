
import { FaEdit } from "react-icons/fa";

export function ProfileSection() {
  return (
    <>
      <div>
        <div className="bg-gray-800  p-4 rounded-lg
       w-[274.64px] h-[20.55] Radius-[20px] justify-center py-1">
          <div>
            <img
              src="/image.png"
              alt="profile"
              className="mx-auto rounded-full mb-2 w-[125px]"
            />
          </div>
          <div className="py-8 flex flex-col items-center justify-center w-full">
            <div>
              <h4 className=" text-primary w-[145px] h-[18.51px]   text-xs">Alice NIYOMUFASHA</h4>
            </div>
            <div>
              <p className="text-sm text-primary underline justify-center py-2">
                niyo.alice@codingschool.rw
              </p>
            </div>
            <div>
              <button className="mt-3 px-4 py-2 border rounded-full flex items-center gap-2 mx-auto text-primary boarder-primary w-[168.06px]
               top-[1004.81px] left- [1484.65x] h-[33.48] boarder-[1px] justify-center">
                ✏️ Edit Profile
              </button>
            </div>
            <div className="w-full bg-green py-6">
              <p className="text-primary w-full text-[16px] border-t py-2">
                Last login: Today at 10:09 AM
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}