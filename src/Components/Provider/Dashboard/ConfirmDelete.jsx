import { X } from "lucide-react";
import { MdQuestionMark } from "react-icons/md";

export default function ConfirmDelete({ onConfirm, onCancel, serviceName , title}) {
  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-2xl p-6 shadow-2xl w-full max-w-md relative">
        
        <button onClick={onCancel} className="absolute top-4 right-4 border border-gray-300 rounded-xl p-2 hover:bg-gray-100 text-gray-500 transition">
          <X size={18} />
        </button>

        <div className="flex flex-col items-center text-center gap-3">
        
          <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
            <span className="text-red-500 text-3xl">
                <MdQuestionMark />
            </span>
          </div>

          <h2 className="text-xl font-bold text-gray-900">{title}</h2>
          <p className="text-sm text-gray-500">
            Are you sure you want to delete <span className="font-semibold text-gray-800">"{serviceName}"</span>? This action cannot be undone.
          </p>
        </div>

        <div className="flex gap-3 mt-6">
          <button
            onClick={onCancel}
            className="flex-1 py-2.5 rounded-full border border-gray-300 text-hard-gray font-semibold text-sm hover:bg-gray-50 transition"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 py-2.5 rounded-full bg-red-500 text-white font-semibold text-sm hover:bg-red-600 transition"
          >
            Yes, Delete
          </button>
        </div>

      </div>
    </div>
  );
}