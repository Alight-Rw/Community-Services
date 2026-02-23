import { Upload, X } from "lucide-react";

export default function AddNewService({ onClick }) {
  const inputClass = "w-full mt-1 px-4 py-2.5 rounded-full border border-hard-gray bg-primary text-hard-gray text-sm placeholder-hard-gray outline-none focus:border-2 focus:border-sky-blue";

  return (
    <div className="fixed inset-0 px-[100px] bg-black/40 flex justify-center items-center z-50 p-4">
    <div className="bg-primary w-full  rounded-2xl p-6 relative shadow-2xl">

      <button onClick={onClick} className="absolute top-5 right-5 border border-gray-300 rounded-xl p-2 hover:bg-gray-100 text-gray-500 transition" >
        <X size={18} />
      </button>

      <h2 className="text-3xl font-bold text-gray-900 mb-1 border-b-2 border-gray-900 w-fit pb-1">
        Add New Service
      </h2>

      <div className="mt-4 space-y-3">

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="text-sm font-semibold text-gray-800">
              Service Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="eg,. Auto Repair Solutions"
              className={inputClass}
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-gray-800">
              Service Category<span className="text-red-500">*</span>
            </label>
            <select className={inputClass}>
              <option value="">Select Category</option>
              <option>Cleaning</option>
              <option>Plumbing</option>
              <option>Electrical</option>
              <option>Gardening</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="text-sm font-semibold text-gray-800">
              Service Price<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="eg,. 15000 RWF/hr"
              className={inputClass}
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-gray-800">
              Service Location<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="eg,. KG 9 Avenue, Kigali"
              className={inputClass}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="text-sm font-semibold text-gray-800">
              Service Telephone<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="eg,. +250788888888"
              className={inputClass}
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-gray-800">
              Service Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="eg,. provider@codingschool.com"
              className={inputClass}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="text-sm font-semibold text-gray-800">
              Service From<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="eg,. 08:00 AM"
              className={inputClass}
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-gray-800">
              Service To<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="eg,. 17:00 PM"
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-semibold text-gray-800">Notes</label>
          <textarea
            rows="4"
            placeholder="eg,. This service come to help community to get the service easily..."
            className="w-full mt-1 px-5 py-3 rounded-2xl border border-gray-200 bg-primary text-gray-400 text-sm placeholder-gray-400 outline-none focus:ring-2 focus:ring-sky-blue resize-none"
          />
        </div>

        <div className="flex flex-col items-center">
          <label className="text-sm font-semibold text-gray-800 mb-2 self-center">
            Service Image<span className="text-red-500">*</span>
          </label>
          <label className="w-[580px] border border-gray-200 rounded-2xl py-5 flex flex-col items-center justify-center text-gray-400 cursor-pointer hover:bg-gray-50">
            <Upload size={26} className="text-gray-500 mb-2" />
            <p className="text-sm text-gray-500">Click to upload image</p>
            <p className="text-xs text-gray-400">PNG, JPG, GIF up to 10MB</p>
            <input type="file" accept="image/*" className="hidden" />
          </label>
        </div>

        <div className="flex justify-end gap-4 pt-1">
          <button
            type="button"
            className="w-100 py-3 rounded-full border border-gray-300 text-gray-800 font-bold text-sm hover:bg-gray-50 transition"
          >
            Cancel
          </button>
          <button
            type="button"
            className="w-100 py-3 rounded-full bg-sky-blue text-white font-bold text-sm hover:bg-secondary"
          >
            Create Service
          </button>
        </div>

      </div>
    </div>
    </div>
  );
}
