
import { FaEdit } from "react-icons/fa";

export function DashboardPage() {
  return (
    <>
      <div>
        <div className="bg-gray-800  p-4 rounded-lg size-80 
        px-20 w-[274.64px] h-[20.55] top-[783.45] left-[1431.36] Radius-[20px] justify-center py-10">
          <div>
          <img
            src="/image.png"
            alt="profile"
            className="mx-auto rounded-full mb-2 w-15/9"
          />
          </div>
          <div className="py-10">
          <div>
          <h4 className=" text-primary w-[145] h-[18.51] top-[973.39] left-[1469] text-xs">Alice NIYOMUFASHA</h4>
          </div>
          <div>
          <p className="text-sm text-primary underline">
            niyo.alice@codingschool.rw
          </p>
          </div>
<div>
          <button className="mt-3 px-4 py-2 border rounded-full flex items-center gap-2 mx-auto text-primary boarder-primary w-[168.06px]
               top-[1004.81px] left- [1484.65x] h-[33.48] boarder-[1px]">
            ✏️ Edit Profile
          </button>
</div>
<div>
          <p className="text-xs text-primary mt-2 border-t border-h-[0px] w-[220px] top-[1058.23] left-[1459] border-[1px][201px] h-[20.57] top-[1072.12] left-[1468] justify-center">
            Last login: Today at 10:09 AM
          </p>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}