import { useState, useEffect } from "react";
import { Upload, X } from "lucide-react";
import { APIsRequestService } from "../../../Services/APIsRequestService";
import { toast, ToastContainer } from "react-toastify";
import { normalizeCollectionResponse } from "../../../Utils/collectionUtils";

export default function AddNewService({
  onClick,
  initialData = {},

  isEditMode = false,
}) {
  const inputClass =
    "w-full mt-1 px-4 py-2.5 rounded-full border border-hard-gray bg-primary  text-sm placeholder-hard-gray outline-none focus:border-2 focus:border-sky-blue";
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await APIsRequestService.FietchcategoryAPI();
        const data = await response.json();
        const normalized = normalizeCollectionResponse(data);
        setCategories(normalized.items);
      } catch (err) {
        console.error("Failed to fetch categories:", err);
      }
    };
    fetchCategories();
  }, []);

  const [formData, setFormData] = useState({
    name: initialData.name || "",
    category: initialData.category || "",
    price: initialData.price || "",
    location: initialData.location || "",
    contact: initialData.contact || "",
    email: initialData.email || "",
    timeFrom: initialData.timeFrom || "",
    timeTo: initialData.timeTo || "",
    description: initialData.requestnotes || "",
    isActive: true,
    avatar: null,
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, avatar: e.target.files[0] }));
  };

  const handleSubmit = async () => {
    if (
      !formData.name ||
      !formData.category ||
      !formData.price ||
      !formData.location ||
      !formData.timeFrom ||
      !formData.timeTo ||
      !formData.description ||
      (!isEditMode && !formData.avatar)
    ) {
      return toast.error("Please fill all required fields!");
    }
    setLoading(true);
    try {
      let response;
      if (isEditMode) {
        response = await APIsRequestService.editServiceAPI(
          initialData._id,
          formData,
        );
      } else {
        response = await APIsRequestService.createServiceAPI(formData);
      }
      const data = await response.json();
      if (!response.ok) {
        return toast.error(data.message);
      }
      toast.success(
        data.message ||
          (isEditMode
            ? "Service Updated successfully"
            : "Service Created Successfully"),
      );
      setFormData({
        name: "",
        category: "",
        price: "",
        location: "",
        contact: "",
        email: "",
        timeFrom: "",
        timeTo: "",
        description: "",
        isActive: true,
        avatar: null,
      });
      onClick?.();
      window.location.reload();
    } catch (error) {
      toast.error("something went wrong!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 px-[100px] bg-black/40 flex justify-center items-center z-50 p-4 overflow-y-auto">
      <ToastContainer />
      <div className="bg-primary w-full rounded-2xl p-6 relative shadow-2xl">
        <button
          onClick={onClick}
          className="absolute top-5 right-5 border border-gray-300 rounded-xl p-2 hover:bg-gray-100 text-gray-500 transition"
        >
          <X size={18} />
        </button>

        <h2 className="text-3xl font-bold text-gray-900 mb-1 border-b-2 border-gray-900 w-fit pb-1">
          {isEditMode ? "Edit Service" : "Add New Service"}
        </h2>

        <div className="mt-4 space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-semibold text-gray-800">
                Service Name<span className="text-red-500">*</span>
              </label>
              <input 
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="eg,. Auto Repair Solutions"
                className={inputClass}
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-800">
                Service Category<span className="text-red-500">*</span>
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="">Select Category</option>
                {categories.map((cat) => (
                  <option key={cat._id} value={cat._id}>
                    {cat.categoryName}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-semibold text-gray-800">
                Service Price<span className="text-red-500">*</span>
              </label>
              <input
                name="price"
                type="text"
                value={formData.price}
                onChange={handleChange}
                placeholder="eg,. 15000 RWF/hr"
                className={inputClass}
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-800">
                Service Location<span className="text-red-500">*</span>
              </label>
              <input
                name="location"
                type="text"
                value={formData.location}
                onChange={handleChange}
                placeholder="eg,. KG 9 Avenue, Kigali"
                className={inputClass}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-semibold text-gray-800">
                Service Telephone<span className="text-red-500">*</span>
              </label>
              <input
                name="contact"
                type="text"
                value={formData.contact}
                onChange={handleChange}
                placeholder="eg,. +250788888888"
                className={inputClass}
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-800">
                Service Email<span className="text-red-500">*</span>
              </label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="eg,. provider@codingschool.com"
                className={inputClass}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-semibold text-gray-800">
                Service From<span className="text-red-500">*</span>
              </label>
              <input
                name="timeFrom"
                type="time"
                value={formData.timeFrom}
                onChange={handleChange}
                placeholder="eg,. 08:00 AM"
                className={inputClass}
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-800">
                Service To<span className="text-red-500">*</span>
              </label>
              <input
                name="timeTo"
                type="time"
                value={formData.timeTo}
                onChange={handleChange}
                placeholder="eg,. 17:00 PM"
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-800">
              Description
            </label>
            <textarea
              name="description"
              rows="4"
              value={formData.description}
              onChange={handleChange}
              placeholder="eg,. This service comes to help the community..."
              className="w-full mt-1 px-5 py-3 rounded-2xl border border-gray-200 bg-primary text-gray-400 text-sm placeholder-gray-400 outline-none focus:ring-2 focus:ring-sky-blue resize-none"
            />
          </div>

          <div className="flex flex-col items-center">
            <label className="text-sm font-semibold text-gray-800 mb-2">
              Service Image<span className="text-red-500">*</span>
            </label>
            <label className="w-[350px] md:w-[580px] border border-gray-200 rounded-2xl py-5 flex flex-col items-center justify-center text-gray-400 cursor-pointer hover:bg-gray-50">
              <Upload size={26} className="text-gray-500 mb-2" />
              {formData.avatar ? (
                <p className="text-sm text-green-500 font-semibold">
                  {formData.avatar.name}
                </p>
              ) : (
                <>
                  <p className="text-sm text-gray-500">Click to upload image</p>
                  <p className="text-xs text-gray-400">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </>
              )}

              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
          </div>

          <div className="flex flex-col sm:flex-row justify-end gap-4 pt-1">
            <button
              type="button"
              onClick={onClick}
              className="w-70 md:w-100 py-3 rounded-full border border-gray-300 text-gray-800 font-bold text-sm hover:bg-gray-50 transition"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={loading}
              className="w-70 md:w-100 py-3 rounded-full bg-sky-blue text-white font-bold text-sm hover:bg-secondary disabled:opacity-50"
            >
              {loading
                ? (isEditMode? "Saving...": "Creating..."):( isEditMode? "Save Changes": "Create Service")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
