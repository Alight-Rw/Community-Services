
import React from "react";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function ActionButtons({ onEdit, onDelete }) {
  return (
    <div className="flex gap-2">
      <button
        onClick={onEdit}
        className="flex items-center gap-1 px-7 py-1 border-2 rounded-[10px] w-[120px] h-[40px] text-blue-600 hover:bg-secondary hover:text-white"
      >
        <MdEdit size={20} />
        Edit
      </button>
      <button
        onClick={onDelete}
        className="flex items-center gap-1 px-7 py-1 border-2 rounded-[10px] w-[120px] h-[40px] text-red-600 hover:bg-red-800 hover:text-white"
      >
        <RiDeleteBin6Line size={20} />
        Delete
      </button>
    </div>
  );
}