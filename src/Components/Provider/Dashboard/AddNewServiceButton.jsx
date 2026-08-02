import React from "react";
import { Plus } from "lucide-react";

function AddNewServiceButton({ onClick }) {
  return (
    <div className="pt-6 flex justify-end  ">
      <button
        onClick={onClick}
        className="
          flex items-center gap-2
          bg-secondary hover:brightness-95
          text-white
          px-3
          h-9 sm:h-10
          rounded-lg
          text-sm
          font-medium
          shadow-sm
          transition-all duration-200
        "
      >
        <span
          className="
            flex items-center justify-center
            h-7 w-7 sm:h-8 sm:w-8
            rounded-full
            border-2 border-white
          "
        >
          <Plus className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={3} />
        </span>

        <span className="whitespace-nowrap">
          Add New Service
        </span>
      </button>
    </div>
  );
}

export default AddNewServiceButton;
