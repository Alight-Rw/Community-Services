import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Pagination from "../../Shared/Pagination";
import ServicesPageChild from "./ServicesCardsChild";
import Spinner from "../../Shared/Loader";
import { APIsRequestService } from "../../../Services/APIsRequestService";
import { toast } from "react-toastify";
import { normalizeCollectionResponse } from "../../../Utils/collectionUtils";

function ServicesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [services, setServices] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const selectedCategory = searchParams.get("category") || "";
  const location = searchParams.get("location") || "";
  const serviceName = searchParams.get("serviceName") || searchParams.get("search") || "";
  const currentPage = Number(searchParams.get("page") || 1);
  const pageSize = 8;

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await APIsRequestService.GetServicesAPI({
          category: selectedCategory,
          location,
          serviceName,
          page: currentPage,
          limit: pageSize,
          sort: "-createdAt",
        });
        const result = await response.json();

        if (!response.ok) {
          setError(result.message || "Failed to fetch services");
          return toast.error(result.message || "Failed to fetch services");
        }

        const normalized = normalizeCollectionResponse(result);
        setServices(normalized.items);
        setPagination(normalized.pagination);
      } catch (fetchError) {
        setError(fetchError.message);
        toast.error(fetchError.message);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, [selectedCategory, location, serviceName, currentPage, pageSize]);

  const handlePageChange = (nextPage) => {
    const nextParams = new URLSearchParams(searchParams);
    nextParams.set("page", String(nextPage));
    nextParams.set("limit", String(pageSize));
    setSearchParams(nextParams);
  };

  return (
    <div className="min-h-screen py-12 px-6 md:px-12 lg:px-20">
      {loading ? (
        <Spinner size={30} color="#3b82f6" />
      ) : error ? (
        <div className="text-center text-red-500 text-xl mt-10">
          {error}
        </div>
      ) : (
        <>
          <h2 className="text-3xl font-bold mb-8">
            {selectedCategory
              ? `Category: ${selectedCategory}`
              : location
              ? `Location: ${location}`
              : serviceName
              ? `Service: ${serviceName}`
              : "All Services"}
          </h2>

          {services.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {services.map((item) => (
                <ServicesPageChild
                  key={item._id}
                  serviceData={item}
                />
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500 text-xl mt-10">
              No services found.
            </div>
          )}

          <Pagination
            currentPage={pagination?.currentPage || currentPage}
            totalPages={pagination?.totalPages || 1}
            totalRecords={pagination?.totalRecords}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
}

export default ServicesPage;
