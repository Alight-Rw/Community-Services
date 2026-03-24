import { useState, useEffect } from "react";
import Table from "../../Shared/Table";
import Pagination from "../../Shared/Pagination";
import ActionButtons from "../Dashboard/EditAndDeleteButton";
import AddNewService from "../Dashboard/AddNewService";
import ConfirmDelete from "../Dashboard/ConfirmDelete";
import { APIsRequestService } from "../../../Services/APIsRequestService";

export function AvailableServicesTable({ width }) {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const [editingService, setEditingService] = useState(null);
  const [deletingService, setDeletingService] = useState(null);

  const handleEdit = (row) => setEditingService(row);
  const handleCloseModal = () => setEditingService(null);

  const handleSave = (updatedData) => {
    setServices((prev) =>
      prev.map((s) => (s.id === updatedData.id ? { ...s, ...updatedData } : s)),
    );
    setEditingService(null);
  };

  const handleDelete = (row) => setDeletingService(row);

  const handleConfirmDelete = () => {
    setServices((prev) => prev.filter((s) => s._id !== deletingService._id));
    setDeletingService(null);
  };

  const handleCancelDelete = () => setDeletingService(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await APIsRequestService.GetServicesAPI();
        const data = await response.json();
       
        setServices(data.data ||[])
      } catch (err) {
        console.error("Failed to fetch services:", err);
        setServices([])
      }finally{
        setLoading(false)
      }
    };
    fetchServices();
  }, []);

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
    { header: "Service Contacts", accessor: "phone"},
      {
    header: "Service Hours",
    render: (_, row) => `${row.timeFrom} - ${row.timeTo}`, 
  },
  {header:"requestNote" ,accessor:"description"},

    { header: "Rejection Notes", accessor: "rejection" },
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
if(loading){
    <p>Loading services...</p>
}
  return (
    <>
      <Table columns={columns} data={services} width={width} />
      <div className="px-1">
        <Pagination />
      </div>

      {editingService && (
        <AddNewService
          onClick={handleCloseModal}
          initialData={editingService}
          onSave={handleSave}
          isEditMode={true}
        />
      )}

      {deletingService && (
        <ConfirmDelete
          serviceName={deletingService.name}
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )}
    </>
  );
}
