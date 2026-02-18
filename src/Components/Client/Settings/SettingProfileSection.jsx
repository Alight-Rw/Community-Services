import { MapPin,Phone,Mail,User  } from "lucide-react"
import { FaEdit } from "react-icons/fa"

function SettingProfileSection (){
    return(
        <>
         
        <div className=" border border-b border-hard-gray rounded-[10px] max-w-4xl p-20 py-10 ">
             <p className="text-sky-blue text-end "><span className="bg-small-soft-blue rounded-[15px] p-2">premium</span></p>

            <div  className="grid grid-col-1 md:grid-cols-2 gap-3">
             <div>
              
            <p ><img src="/image.png" alt="photo" className="w-40 h-40 rounded-full border border-2 border-secondary rounded-[100px] "></img></p>
            <button className="text-secondary  border border-2 border-secondary rounded-[10px] p-2 mt-3 px-6">Change Photo</button>
            </div>

            <div className="">
              <p className="text-xl font-bold mb-3">Alice Niyomufasha</p>
               <div className="flex items-start gap-4">
                            <div className="p-2  text-secondary rounded-lg"><Mail size={20} /></div>
                            <div>
                                <p className="text-xs text-hard-gray ">Email</p>
                                <p className="text-sm  border-b border-hard-gray pb-3 mb-3">coding@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="p-2  text-secondary rounded-lg"><Phone size={20} /></div>
                            <div>
                                <p className="text-xs text-hard-gray ">Phone</p>
                                <p className="text-sm  border-b border-hard-gray pb-3 mb-3">+250 788 888 888</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="p-2  text-secondary rounded-lg"><MapPin size={20} /></div>
                            <div>
                                <p className="text-xs text-hard-gray ">Location</p>
                                <p className="text-sm  border-b border-hard-gray pb-4 mb-3">KG 9 Avenue, Kigali Rwanda</p>
                            </div>
                        </div>
                         <div className="flex items-start gap-4">
                            <div className="p-2  text-secondary rounded-lg"><User size={20} /></div>
                            <div>
                                <p className="text-xs  text-hard-gray  ">Member since</p>
                                <p className="text-sm  text-wrap mb-3">KG 9 Avenue, Kigali Rwanda</p>
                            </div>
                            
                            
                        </div>
                        <div className="flex text-primary justify-center bg-sky-blue w-[400px] rounded-[15px] p-2 gap-4 mt-4">
                            <FaEdit size={22} />
                           <button className="">Edit Profile</button>
                        </div>
            </div>
            </div>
        </div>

        </>
    )
}
export default SettingProfileSection