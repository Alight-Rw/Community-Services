

import React from "react";


export default function StatusButtons({ onEdit, onDelete }) {
  return (
    <div className=" gap-2">
        <div className="grid grid-cols-2">
      <button
        onClick={onEdit}
        className="flex items-center gap-1 px-7 py-1 border-2 border-hard-gray rounded-[10px] w-[120px] h-[40px] text-black  hover:text-white"
      >
      
        Waiting
      </button>
      <button
        onClick={onDelete}
        className="flex items-center gap-1 px-7 py-1 border-2 border-green-500 rounded-[10px] w-[120px] h-[40px]  hover:bg-red-800 hover:text-white"
      >
       
        Approve
      </button>
      </div>
       <button
        onClick={onEdit}
        className="flex items-center gap-1 px-7 py-1 border-2 rounded-[10px] w-[120px] h-[40px] text-blue-600 hover:bg-secondary hover:text-white"
      >
       
        Reject
      </button>
      <button
        onClick={onDelete}
        className="flex items-center gap-1 px-7 py-1 border-2 rounded-[10px] w-[120px] h-[40px] text-red-600 hover:bg-red-800 hover:text-white"
      >
        
        Accept
      </button>
    </div>
  );
}