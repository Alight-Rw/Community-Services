/** @format */

import { Calendar } from 'lucide-react';
import Table from '../../Shared/Table';
import Pagination from '../../Shared/Pagination';
import { useGetClientRequestedServices } from '../../../Hooks/useGetClientRequestedHooks';

export function WaitingServices({ width }) {
  const { data, loading } = useGetClientRequestedServices({
    status: 'Waitting',
  });
  const waitingServices = data?.data || []

  const canBook = (service) => {
    if (service.status === 'Waiting') return false;
    return false;
  };
  const columns = [
    {
      header: 'Service Avatar',
      accessor: 'serviceId',
      render: (value, row) => (
        <img
          src={value.avatar}
          alt={row.name}
          className='w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg object-cover'
        />
      ),
    },
    {
      header: 'Service Name',
      accessor: 'serviceId',
      render: (serviceId) => serviceId?.name,
    },
    {
      header: 'Service Location',
      accessor: 'providerId',
      render: (value) => value.location || '0787684171',
    },
    {
      header: 'Service Contacts',
      accessor: 'providerId',
      render: (value) => value.phone || '0787684171',
    },
    {
      header: 'Service Hours',
      accessor: 'serviceId',
      render: (value, row) => (
        <span>
          {row.serviceId?.timeFrom} - {row.serviceId?.timeTo}
        </span>
      ),
    },
    {
      header: 'Request Status',
      accessor: 'status',
      render: (row) => (
        <div className='bg-gray-300  p-2 justify-items-center rounded-full w-full'>
          <p>{row}</p>
        </div>
      ),
    },
    {
      header: 'Request Notes',
      accessor: 'requestNote',
      render: (value) => (
        <div className='w-[200px]'>
            <p>{value || 'N/A'}</p>
        </div>
      )
    },
    {
      header: 'Rejection Notes',
      accessor: 'rejection',
      render: (value) => value?.rejection || 'N/A',
    },

    {
      header: 'Action',
      accessor: 'id',

      render: (value, row) => {
        const isBookable = canBook(row);
        return (
          <button
            disabled={!isBookable}
            className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-4 text-nowrap py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
              isBookable
                ? 'bg-primary border-2 border-secondary text-secondary hover:bg-secondary hover:text-primary cursor-pointer'
                : 'bg-gray-100 border-2 border-gray-300 text-gray-400 cursor-not-allowed'
            }`}
          >
            <Calendar className='w-3 h-3 sm:w-4 sm:h-4' />
            Book Now
          </button>
        );
      },
    },
  ];

  return (
    <div className='pr-12'>
     
        <Table
          columns={columns}
          data={waitingServices}
          width={width}
          loading={loading}
        />
      

      <Pagination />
    </div>
  );
}
