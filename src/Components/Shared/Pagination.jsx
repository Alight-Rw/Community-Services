import React, { useMemo, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const buildVisiblePages = (currentPage, totalPages) => {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  const pages = [1];
  const startPage = Math.max(2, currentPage - 1);
  const endPage = Math.min(totalPages - 1, currentPage + 1);

  if (startPage > 2) {
    pages.push("left-ellipsis");
  }

  for (let page = startPage; page <= endPage; page += 1) {
    pages.push(page);
  }

  if (endPage < totalPages - 1) {
    pages.push("right-ellipsis");
  }

  pages.push(totalPages);

  return pages;
};

const Pagination = ({
  currentPage: controlledPage,
  totalPages = 1,
  totalRecords,
  onPageChange,
  loading = false,
}) => {
  const [internalPage, setInternalPage] = useState(1);

  const currentPage = controlledPage ?? internalPage;
  const effectiveTotalPages = Math.max(totalPages || 1, 1);
  const handlePageChange = onPageChange || setInternalPage;
  const visiblePages = useMemo(
    () => buildVisiblePages(currentPage, effectiveTotalPages),
    [currentPage, effectiveTotalPages],
  );

  if (effectiveTotalPages <= 1) {
    return null;
  }

  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between py-4">
      <div className="text-sm font-medium text-gray-500 space-y-1">
        <div>
          Page {currentPage} of {effectiveTotalPages}
        </div>
        <div>
          {typeof totalRecords === "number"
            ? `${totalRecords} total records`
            : "Pagination"}
        </div>
      </div>

      <div className="flex items-center gap-3 flex-wrap justify-end">
        <button
          onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
          disabled={loading || currentPage <= 1}
          className={`p-3 rounded-xl transition ${
            currentPage > 1 && !loading
              ? "bg-secondary text-white hover:bg-secondary"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          <FaChevronLeft />
        </button>

        <div className="flex items-center gap-2 flex-wrap">
          {visiblePages.map((pageItem) =>
            typeof pageItem === "number" ? (
              <button
                key={pageItem}
                onClick={() => handlePageChange(pageItem)}
                disabled={loading}
                className={`min-w-10 px-4 py-2 rounded-xl text-sm font-semibold border transition ${
                  pageItem === currentPage
                    ? "bg-secondary text-white border-secondary"
                    : "bg-white text-gray-700 border-gray-300 hover:border-secondary"
                } ${loading ? "opacity-60 cursor-not-allowed" : ""}`}
              >
                {pageItem}
              </button>
            ) : (
              <span
                key={pageItem}
                className="px-2 text-gray-400 select-none"
              >
                ...
              </span>
            ),
          )}
        </div>

        <button
          onClick={() => handlePageChange(Math.min(currentPage + 1, effectiveTotalPages))}
          disabled={loading || currentPage >= effectiveTotalPages}
          className={`p-3 rounded-xl transition ${
            currentPage < effectiveTotalPages && !loading
              ? "bg-secondary text-white hover:bg-secondary"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
