


import { useState } from 'react';
import Table from '../../Shared/Table';
import Pagination from '../../Shared/Pagination';
import ActionButtons from '../Dashboard/EditAndDeleteButton';
import AddNewService from '../Dashboard/AddNewService';
import ConfirmDelete from '../Dashboard/ConfirmDelete';

export function AvailableServicesTable({ width }) {

    const [services, setServices] = useState([
        { id: 6, image: "/images/dec.png", name: "K.C Decorators Group", location: "KG 8 St Remera-Kabeza", contact: "+250788888888", hours: "08:00AM - 17:00PM", requestnotes: "Please schedule the service for Friday morning and call before arrival.", rejection: "N/A" },
        { id: 7, image: "/images/car-wash.png", name: "Sparkle Auto Wash", location: "KK 25 Rd, Gisozi", contact: "+250788333333", hours: "06:00AM - 20:00PM", requestnotes: "Please schedule the service for Friday morning and call before arrival.", rejection: "N/A" },
        { id: 8, image: "/images/sewer.png", name: "Quality Sewing Services", location: "NY 8 Rd, Nyamirambo", contact: "+250788222222", hours: "09:00AM - 18:00PM", requestnotes: "Please schedule the service for Friday morning and call before arrival.", rejection: "N/A" },
        { id: 9, image: "/ServicesImage/ServiceImg1.png", name: "Car Auto Repair LTD", location: "KG 9 Avenue, Kigali", contact: "+250788888888", hours: "08:00AM - 18:00PM", requestnotes: "Please schedule the service for Friday morning and call before arrival.", rejection: "N/A" },
    ]);

    const [editingService, setEditingService] = useState(null);
    const [deletingService, setDeletingService] = useState(null);

    const handleEdit = (row) => setEditingService(row);
    const handleCloseModal = () => setEditingService(null);

    const handleSave = (updatedData) => {
        setServices(prev => prev.map(s => s.id === updatedData.id ? { ...s, ...updatedData } : s));
        setEditingService(null);
    };

    const handleDelete = (row) => setDeletingService(row);

    const handleConfirmDelete = () => {
        setServices(prev => prev.filter(s => s.id !== deletingService.id));
        setDeletingService(null);
    };

    const handleCancelDelete = () => setDeletingService(null);

    const columns = [
        { header: "Service Avatar", accessor: "image", render: (value, row) => (<img src={value} alt={row.name} className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg object-cover" />) },
        { header: "Service Name", accessor: "name" },
        { header: "Service Location", accessor: "location" },
        { header: "Service Contacts", accessor: "contact" },
        { header: "Service Hours", accessor: "hours" },
        { header: "Request Notes", accessor: "requestnotes" },
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

    return (
        <>
            <Table columns={columns} data={services} width={width} />
            <div className='px-1'>
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
