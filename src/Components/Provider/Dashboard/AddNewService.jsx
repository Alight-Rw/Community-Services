import { FaUpload, FaTimes } from "react-icons/fa";

export function AddNewService() {
  return (
    <div className=" sm flex items-center justify-center  bg-gray-100 px-8 ">
      
      <div className=" w-250  bg-white p-5 sm:p-10 rounded-2xl shadow-2xl border border-blue-100 ">
   <div className="flex items-center justify-between mb-6 sm:mb-10 w-full">
  
  <h1 className="font-bold text-xl sm:text-3xl text-gray-800 underline decoration-2 decoration-black">
    Add New <span>Service</span>
  </h1>

  <button className="bg-gray-50 rounded-full p-2 hover:bg-red-50 hover:text-red-500 transition">
    <FaTimes className="font-bold text-gray-400 size-4 sm:size-5 border border-black rounded" />
  </button>

</div>


        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4 sm:gap-y-6">
          
          <div className="flex flex-col gap-1">
            <label className="font-bold text-gray-800 text-sm">Service Name<span className="text-red-600 ml-0.5">*</span></label>
            <input 
              className="border border-gray-300 rounded-lg w-40 sm:w-100 h-[32px] sm:h-[25px] px-3 focus:border-blue-500 text-sm "
              type="text" 
              placeholder="eg,. Auto Repair Solutions" 
            />
          </div>

          <div className="sm flex flex-col gap-1">
            <label className="font-bold text-gray-800 text-sm">Service Category<span className="text-red-600 ml-0.5">*</span></label>
            <div className="relative">
              <select
                className="sm  border border-gray-300 rounded-lg w-40 sm:w-100 h-[32px] md:h-[25px] px-3 text-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-200 outline-none text-sm bg-white cursor-pointer"
                name="serviceCategory"
              >
                <option value="">Select Category</option>
                <option value="plumbing">Plumbing</option>
                <option value="it">IT Support</option>
              </select>
              <div className="sm absolute inset-y-0 right-3 sm:right-[calc(100%-90px)] flex items-center pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </div>
          </div>

          <div className="sm sm flex flex-col gap-1">
            <label className="font-bold text-gray-800 text-sm">Service Price<span className="text-red-600 ml-0.5">*</span></label>
            <input 
              className="border border-gray-300 rounded-lg w-40 md:w-100 h-[32px] md:h-[25px] px-3 focus:border-blue-500 outline-none text-sm"
              type="text" 
              placeholder="eg,. 15000 RWF/hr" 
            />
          </div>
          <div className="sm flex flex-col gap-1">
            <label className="font-bold text-gray-800 text-sm">Service Location<span className="text-red-600 ml-0.5">*</span></label>
            <input 
              className="border border-gray-300 rounded-lg w-40 md:w-100 h-[32px] md:h-[25px] px-3 focus:border-blue-500 outline-none text-sm"
              type="text" 
              placeholder="eg,. KG 9 Avenue, Kigali" 
            />
          </div>

          <div className="sm flex flex-col gap-1">
            <label className="font-bold text-gray-800 text-sm">Service Telephone<span className="text-red-600 ml-0.5">*</span></label>
            <input 
              className="border border-gray-300 rounded-lg w-40 md:w-100 h-[32px] md:h-[25px] px-3 focus:border-blue-500 outline-none text-sm"
              type="tel" 
              placeholder="eg,. +250788888888" 
            />
          </div>
          <div className="sm flex flex-col gap-1">
            <label className="font-bold text-gray-800 text-sm">Service Email<span className="text-red-600 ml-0.5">*</span></label>
            <input 
              className="border border-gray-300 rounded-lg w-40 md:w-100 h-[32px] md:h-[25px] px-3 focus:border-blue-500 outline-none text-sm"
              type="email" 
              placeholder="eg,. provider@codingschool.com" 
            />
          </div>
          <div className="sm flex flex-col gap-1">
            <label className="font-bold text-gray-800 text-sm">Service From<span className="text-red-600 ml-0.5">*</span></label>
            <input 
              className="border border-gray-300 rounded-lg w-40 sm:w-100 h-[32px] md:h-[25px] px-3 focus:border-blue-500 outline-none text-sm"
              type="text" 
              placeholder="eg,. 08:00 AM" 
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-bold text-gray-800 text-sm">Service To<span className="text-red-600 ml-0.5">*</span></label>
            <input 
              className="border border-gray-300 rounded-lg w-40 md:w-100 h-[32px] md:h-[25px] px-3 focus:border-blue-500 outline-none text-sm"
              type="text" 
              placeholder="eg,. 17:00 PM" 
            />
          </div>
        </div>

        <div className="sm-6 flex flex-col gap-1 py-6">
          <label className="font-bold text-gray-800 text-sm">Notes</label>
          <textarea 
            className="border border-gray-300 rounded-lg w-full sm:w-full h-[80px] md:h-[60px] px-3 py-2 focus:border-blue-500 outline-none text-sm resize-none"
            placeholder="eg,. This service come to help community to get the service easily..."
          ></textarea>
        </div>
        <div className="sm-6 text-center py-8">
          <label className="font-bold text-gray-800 text-sm block sm-2">Service Image<span className="text-red-600">*</span></label>
          <div className="flex justify-center ">
            <label htmlFor="image-upload" className="border border-gray-300 rounded-lg w-full max-w-lg border-2 border-dashed border-gray-200 rounded-xl p-4 md:p-6 flex flex-col items-center justify-center  hover:bg-gray-50 ">
              <FaUpload className="text-gray-400 text-xl mb-2 group-hover:text-blue-500 transition-colors" />
              <p className="text-[11px] font-bold text-gray-600">Click to upload image</p>
              <p className="text-[9px] text-gray-400 uppercase tracking-wider">PNG, JPG up to 10MB</p>
              <input id="image-upload" type="file" className="hidden" />
            </label>
          </div>
        </div>
        <div className="sm-10 flex flex-col-reverse sm:flex-row items-center justify-end gap-4">
          <button className="w-full md:w-56 h-[45px] border border-gray-300 text-gray-900 font-bold rounded-xl hover:bg-gray-50 transition-all active:scale-95">
            Cancel
          </button>
          <button className=" sm w-full sm:w-56 h-[45px] bg-[#0066FF] text-white font-bold rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all active:scale-95">
            Create Service
          </button>
        </div>

      </div>
    </div>
  );
}