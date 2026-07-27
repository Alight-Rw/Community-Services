import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import Table from "../../Shared/Table";
import Pagination from "../../Shared/Pagination";
import ActionButtons from "../Dashboard/EditAndDeleteButton";
import AddNewService from "../Dashboard/AddNewService";
import ConfirmDelete from "../Dashboard/ConfirmDelete";
import { APIsRequestService } from "../../../Services/APIsRequestService";
import { normalizeCollectionResponse } from "../../../Utils/collectionUtils";

export function AvailableServicesTable({ width, search = "" }) {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const limit = 4;
  const [pagination, setPagination] = useState(null);

  const [editingService, setEditingService] = useState(null);
  const [deletingService, setDeletingService] = useState(null);

  const [isDeleting, setIsDeleting] = useState(false);
  const handleEdit = (row) => setEditingService(row);
  const handleCloseModal = () => setEditingService(null);


  const handleDelete = (row) => setDeletingService(row);
const handleConfirmDelete = async () => {
    if (!deletingService?._id) return;

  
    setIsDeleting(true); 

    try {
      const response = await APIsRequestService.DeleteServiceAPI(deletingService._id);
      const data = await response.json();

      if (!response.ok) {
        
        setIsDeleting(false); 
        return toast.error(data.message );
      }

      
      toast.success(data.message);
      setServices((prev) => prev.filter((s) => s._id !== deletingService._id));
      
      setDeletingService(null);
      setIsDeleting(false); 

    } catch (error) {
      
      console.error(error);
      toast.error(error.message);
      setIsDeleting(false); 
    }
  };

  const handleCancelDelete = () => {
  if (isDeleting) return; 
  setDeletingService(null);
};

  useEffect(() => {
    setPage(1);
  }, [search]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        setError("");
        const response = await APIsRequestService.GetProviderServicesAPI({
          page,
          limit,
          search,
        });
        const data = await response.json();

        if (!response.ok) {
          setError(data.message || "Failed to fetch services");
          return toast.error(data.message || "Failed to fetch services");
        }

        const normalized = normalizeCollectionResponse(data);
        setServices(normalized.items || []);
        setPagination(normalized.pagination);
      } catch (err) {
        console.error("Failed to fetch services:", err);
        setError(err.message);
        setServices([])
      } finally {
        setLoading(false)
      }
    };
    fetchServices();
  }, [page, limit, search]);

  const columns = [
    {
      header: "Service Avatar",
      accessor: "avatar",
      render: (value, row) => (
        <img
          src={value}
          alt={row.name}
          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg object-cover"
        />
      ),
    },
    { header: "Service Name", accessor: "name" },
    { header: "Service Location", accessor: "location" },
    {
      header: "Service Contacts",
      accessor: "providerId",
      render: (value) => (
        <span className="font-bold text-slate-500">
          {value?.phone || "07XXXXXXXX"}
        </span>
      ),
    },
    {
      header: "Service Hours",
      render: (_, row) => `${row.timeFrom} - ${row.timeTo}`,
    },
    {
      header: "Request Notes",
      accessor: "description",
      render: (value) => (
        <div className="w-[200px]">
          <p>{value || "N/A"}</p>
        </div>
      ),
    },

    {
      header: "Rejection Notes",
      accessor: "rejectionNote",
      render: (value) => (
        <p className="text-xs text-slate-400">
          {value || "N/A"}
        </p>
      ),
    },
    {
      header: "Action",
      accessor: "id",
      render: (value, row) => (
        <ActionButtons
          onEdit={() => handleEdit(row)}
          onDelete={() => handleDelete(row)}
        />
      ),
    },
  ];

  return (
    <>
    <ToastContainer />
      <Table columns={columns} data={services} width={width} loading={loading} error={error} />

      <div className="px-1">
        <Pagination
          currentPage={pagination?.currentPage || page}
          totalPages={pagination?.totalPages || 1}
          totalRecords={pagination?.totalRecords}
          onPageChange={setPage}
          loading={loading}
        />
      </div>

      {editingService && (
        <AddNewService
          onClick={handleCloseModal}
          initialData={editingService}
          isEditMode={true}
        />
      )}
      {deletingService && (
        <ConfirmDelete
          serviceName={deletingService.name}
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
          title="Delete Service?"
          isLoading={isDeleting}
          disabled={isDeleting}
        />
      )}
    </>
  );
}
