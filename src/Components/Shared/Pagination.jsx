import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Pagination = () => {
  const [page, setPage] = useState(2);
  const totalPages = 8;

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  return (
    <div className=" flex justify-end">
      <div className="flex items-center gap-4 bg-white p-4 rounded-2xl ">
        
        <button
          onClick={handlePrev}
          className={`p-3 rounded-xl transition ${
            page > 1 ? "bg-secondary text-white hover:bg-secondary" : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          <FaChevronLeft />
        </button>

        
        <div
          className={`px-6 py-2 rounded-xl text-lg font-semibold transition ${
            page > 1 ? "text-secondary" : "text-black"
          }`}
        >
          {page.toString().padStart(2, "0")}
        </div>

        
        <button
          onClick={handleNext}
          className={`p-3 rounded-xl transition ${
            page < totalPages ? "bg-secondary text-white hover:secondary" : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
