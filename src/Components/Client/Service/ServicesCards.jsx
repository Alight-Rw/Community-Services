import { useSearchParams } from "react-router-dom";
import Pagination from "../../Shared/Pagination";
import ServicesPageChild from "./ServicesCardsChild";
import Spinner from "../../Shared/Loader";
import { useGetService } from "../../../Hooks/useGetClientRequestedHooks";

function ServicesPage() {
  const { items, loading } = useGetService();

  const [searchParams] = useSearchParams();

  const selectedCategory = searchParams.get("category");
  const location = searchParams.get("location");

  let filteredServices = items?.data || [];

  if (selectedCategory) {
    filteredServices = filteredServices.filter((service) =>
      service.category?.categoryName
        ?.toLowerCase()
        .includes(selectedCategory.toLowerCase())
    );
  }

  if (location) {
    filteredServices = filteredServices.filter((service) =>
      service.location
        ?.toLowerCase()
        .includes(location.toLowerCase())
    );
  }

  return (
    <div className="min-h-screen py-12 px-6 md:px-12 lg:px-20">
      {loading ? (
        <Spinner size={30} color="#3b82f6" />
      ) : (
        <>
          <h2 className="text-3xl font-bold mb-8">
            {selectedCategory
              ? `Category: ${selectedCategory}`
              : location
              ? `Location: ${location}`
              : "All Services"}
          </h2>

          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredServices.map((item) => (
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
        </>
      )}

      <Pagination />
    </div>
  );
}

export default ServicesPage;