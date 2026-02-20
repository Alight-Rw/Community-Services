import { FaUpload, FaTimes } from "react-icons/fa";

export function AddNewService({ setOpen }) {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-white">
      <div className="w-full max-w-3xl p-5 sm:p-10 rounded-2xl border border-gray-100 shadow-sm bg-white">
        
       
        <div className="flex items-center justify-between mb-8 sm:mb-12 w-full  pb-4">
          <h1 className="font-bold text-xl sm:text-3xl text-gray-800">
            <span className="border-b">Add New Service</span>
          </h1>
          
          <button 
            onClick={() => setOpen(false)}
            className="p-2 bg-red-50 border border-red-200 text-red-600 rounded-full hover:bg-red-100 transition-colors"
            title="Close Form"
          >
            <FaTimes size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 sm:gap-y-6">
          <div className="flex flex-col gap-1">
            <label className="font-bold text-gray-800 text-sm">Service Name<span className="text-red-600 ml-0.5">*</span></label>
            <input className="border border-gray-300 rounded-lg w-40 h-10 px-3 focus:border-blue-500 outline-none text-sm" type="text" placeholder="eg,. Auto Repair" />
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-bold text-gray-800 text-sm">Service Category<span className="text-red-600 ml-0.5">*</span></label>
            <select className="border border-gray-300 rounded-lg w-40 h-10 px-3 text-gray-500 focus:border-blue-500 outline-none text-sm bg-white cursor-pointer">
              <option value="">Select Category</option>
              <option value="plumbing">Plumbing</option>
               <option value="plumbing">IT </option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-bold text-gray-800 text-sm">Service Price<span className="text-red-600 ml-0.5">*</span></label>
            <input className="border border-gray-300 rounded-lg w-40 h-10 px-3 focus:border-blue-500 outline-none text-sm" type="text" placeholder="15000 RWF/hr" />
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-bold text-gray-800 text-sm">Service Location<span className="text-red-600 ml-0.5">*</span></label>
            <input className="border border-gray-300 rounded-lg w-40 h-10 px-3 focus:border-blue-500 outline-none text-sm" type="text" placeholder="Kigali, Rwanda" />
          </div>
          
         
          <div className="flex flex-col gap-1">
            <label className="font-bold text-gray-800 text-sm">Service Telephone<span className="text-red-600 ml-0.5">*</span></label>
            <input className="border border-gray-300 rounded-lg w-40 h-10 px-3 focus:border-blue-500 outline-none text-sm" type="tel" placeholder="+250..." />
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-bold text-gray-800 text-sm">Service Email<span className="text-red-600 ml-0.5">*</span></label>
            <input className="border border-gray-300 rounded-lg w-40 h-10 px-3 focus:border-blue-500 outline-none text-sm" type="email" placeholder="provider@email.com" />
          </div>
        </div>

        <div className="flex flex-col gap-1 py-6">
          <label className="font-bold text-gray-800 text-sm">Notes</label>
          <textarea className="border border-gray-300 rounded-lg w-full h-20 px-3 py-2 focus:border-blue-500 outline-none text-sm resize-none" placeholder="Describe your service..."></textarea>
        </div>

        <div className="text-center pb-8">
          <div className="flex justify-center">
            <label htmlFor="image-upload" className="cursor-pointer border-2 border-dashed border-gray-500 rounded-xl p-6 flex flex-col items-center justify-center hover:bg-gray-50 transition-colors w-full max-w-lg">
              <FaUpload className="text-gray-400 text-xl mb-2" />
              <p className="text-[11px] font-bold text-gray-600">Click to upload image</p>
              <input id="image-upload" type="file" className="hidden" />
            </label>
          </div>
        </div>

        <div className="flex flex-col-reverse sm:flex-row items-center justify-end gap-4">
          <button onClick={() => setOpen(false)} className="w-full sm:w-48 h-11 border border-gray-300 text-gray-900 font-bold rounded-xl hover:bg-gray-50 transition-all">
            Cancel
          </button>
          <button className="w-full sm:w-48 h-11 bg-secondary text-white font-bold rounded-xl hover:bg-blue-700 shadow-md transition-all active:scale-95">
            Create Service
          </button>
        </div>
      </div>
    </div>
  );
}