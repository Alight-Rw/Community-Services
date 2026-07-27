/** @format */
import { useEffect, useState } from "react";
import { handlegetGallery } from "./GalleryImages";
import { ToastContainer } from "react-toastify";
import Pagination from "../../Shared/Pagination";
import "react-toastify/dist/ReactToastify.css";


function splitIntoColumns(items = [], cols) {
  if (!Array.isArray(items)) return [];
  const columns = Array.from({ length: cols }, () => []);
  items.forEach((item, i) => {
    columns[i % cols].push(item);
  });
  return columns;
}

export default function ShowGallery() {
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const limit = 8;
  const [pagination, setPagination] = useState(null);

  useEffect(() => {
    const fetchGallery = async () => {
      setLoading(true);
      setError("");

      const data = await handlegetGallery({ page, limit });
      setGallery(Array.isArray(data.items) ? data.items : []);
      setPagination(data.pagination);
      setLoading(false);
    };
    fetchGallery();
  }, [page, limit]);

  const columns = splitIntoColumns(gallery, 3);

  if (loading) {
    return <div className="text-center p-5">Loading gallery...</div>;
  }

  if (error) {
    return <div className="text-center p-5 text-red-500">{error}</div>;
  }

  if (gallery.length === 0) {
    return <div className="text-center p-5">No gallery items found.</div>;
  }

  return (
    <>
      <ToastContainer />

      <div className="w-full flex flex-col gap-6 p-4 sm:justify-center sm:flex-row sm:flex-wrap md:flex-nowrap">
        {columns.map((colItems, colIndex) => (
          <div
            key={colIndex}
            className="flex flex-col gap-6 w-full sm:w-[48%] md:flex-1"
          >
            {colItems.map((item, itemIndex) => (
              <div className="relative" key={itemIndex}>
                <img
                  className="rounded-xl w-full block object-cover"
                  src={item.avatar}
                  alt={item.title}
                />
                <div className="bg-blue-500/50 absolute bottom-2 left-3 text-white text-[10px] font-sans px-3 py-1.5 rounded-md">
                  <h1>{item.title}</h1>
                  <div>{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <Pagination
        currentPage={pagination?.currentPage || page}
        totalPages={pagination?.totalPages || 1}
        totalRecords={pagination?.totalRecords}
        onPageChange={setPage}
      />
    </>
  );
}
