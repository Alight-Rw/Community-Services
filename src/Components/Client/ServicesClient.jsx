import { FaUpload } from "react-icons/fa";
export function ServicesClient (){
    return(
        <>
        <div className="flex flex-col items-center justify-center  h-[987px] ">
          <div className="grid grid-cols-2">
            <div>
              <h1>Add New <span>Service</span></h1>
            </div>
            <div>
            
            </div>
          </div>
          <div className="grid grid-cols-2 flex flex-col items-center justify-center gap-2">
            <div>
              <h1>
                sarvice Name*
              </h1>
              <input className="border-rounded border-red-300 w-[220px] h-[25px] px-4"
              type="eg,. Auto Repair Solutions" name="eg,. Auto Repair Solutions" 
              id="eg,. Auto Repair Solutions" placeholder="eg,. Auto Repair Solutions" />
            </div>
            <div>
              <h1>service category*</h1>
              <input  
              className="border-rounded border-red-300 w-[220px] h-[25px] px-4"
              type="elect Category" name="elect Category" id="elect Category" 
              placeholder="elect Category"/>
            </div>
            <div>
              <h1>service price*</h1>
              <input className="border-rounded border-red-300 w-[220px] h-[25px] px-4"
               type="eg,. 15000 RWF/hr" name="eg,. 15000 RWF/hr" id="eg,. 15000 RWF/hr" 
              placeholder="eg,. 15000 RWF/hr"/>
            </div>
            <div>
              <h1>service location</h1>
              <input className="border-rounded border-red-300 w-[220px] h-[25px] px-4"
              type="eg,. KG 9 Avenue, Kigal" name="eg,. KG 9 Avenue, Kigal" id="eg,. KG 9 Avenue, Kigal" 
              placeholder="eg,. KG 9 Avenue, Kigal"/>
            </div>
            <div>
              <h1>service telephone*</h1>
              <input className="border-rounded border-red-300 w-[220px] h-[25px] px-4"
              type="eg,. +250788888888" name="eg,. +250788888888" id="eg,. +250788888888" 
              placeholder="eg,. +250788888888"/>
            </div>
            <div>
              <h1>service email*</h1>
              <input className="border-rounded border-red-300 w-[220px] h-[25px] px-4"
              type="eg,. provider@codingschool.com" name="eg,. provider@codingschool.com" 
              id="eg,. provider@codingschool.com" placeholder="eg,. provider@codingschool.com"/>
            </div>
            <div>
              <h1>service from*</h1>
              <input className="border-rounded border-red-300 w-[220px] h-[25px] px-4"
               type="eg,. 08:00 AM" name="eg,. 08:00 AM" id="eg,. 08:00 AM" 
              placeholder="eg,. 08:00 AM"/>
            </div>
            <div>
              <h1>service to*</h1>
              <input className="border-rounded border-red-300 w-[220px] h-[25px] px-4"
              type="eg,. 17:00 PM" name="eg,. 17:00 PM" id="eg,. 17:00 PM" 
              placeholder="eg,. 17:00 PM"/>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center justify-center">
              <h1>Nots</h1>
              <input className="border-rounded border-red-300 w-[520px] h-[30px] px-4"
              type="eg,. This service come to help community to get the service easily..."
               name="eg,. This service come to help community to get the service easily..." 
               id="eg,. This service come to help community to get the service easily..." 
              placeholder="eg,. This service come to help community to get the service easily..." />
            </div>
            <div className="w-[1130px] flex flex-col items-center justify-center">
              <h1>Service Image*</h1>
               <label
      htmlFor="image-upload"
      className="w-full max-w-md mx-auto
      border-2 border-dashed border-gray-300
      rounded-xl p-6
      flex flex-col items-center justify-center
      cursor-pointer hover:border-blue-500
      transition"
    >
      <FaUpload className="text-gray-400 text-xl mb-2" />

      <p className="text-sm font-medium text-gray-700">
        Click to upload image
      </p>

      <p className="text-xs text-gray-400 mt-1">
        PNG, JPG, GIF up to 10MB
      </p>

      <input
        id="image-upload"
        type="file"
        accept="image/*"
        className="hidden"
      />
    </label>
            </div>
            <div className="grid grid-cols-2 py-4">
              <div className="px-2 flex flex-col items-center justify-center">
                <h1>cancer</h1>
              </div>
              <div>
                <button className="bg-blue-800 flex flex-col items-center justify-center">create service</button>
              </div>
            </div>
            </div>  
        </div>
        </>
    )
}