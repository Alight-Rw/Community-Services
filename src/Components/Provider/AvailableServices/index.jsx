

import React, { useState } from 'react';
import Paragraphy from '../../Shared/Title';
import DashboardNav from '../../Shared/DashboardNav';
import Sidebar from '../../Shared/Sidebar';
import DashboardSearch from '../../Shared/DashboardSearch';
import { AvailableServicesTable } from './AvailableServicesTable';

export function AvailableServicesProvider() {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className='flex flex-col h-screen bg-universal overflow-hidden'>
      <DashboardNav
        notificationNumber={2}
        notifications={[
          { id: 1,type: "success", title: "Booking Creacted", message: "Two clients booked services at",
            time: "10:00 AM", minutes:"1m ago", isUnread: true },
          { id: 2, type: "accepted", title: " Completed Services", message: "50 service are completed at", time: "3h ago", isUnread: true },
          
          
        ]}
      />
      <div className='flex flex-1 overflow-hidden relative'>
        {isExpanded && (
          <div
            className='fixed inset-0 bg-black/50 z-20 xl:hidden transition-opacity'
            onClick={() => setIsExpanded(true)}
          />
        )}

        <div className='fixed inset-y-0 left-0 z-50 xl:relative'>
          <Sidebar
            isExpanded={isExpanded}
            setIsExpanded={setIsExpanded}
          />
        </div>

        <main className='flex-1 pl-20 overflow-y-auto transition-all duration-300'>
          <div className='px-8 md:px-0 pt-20 md:space-y-1 '>
            <Paragraphy
              highlight={'Requested Services'}
              description={
                'Quick summary of services that have been requested by the client'
              }
            />
          </div>

          <div className='px-8 md:px-0 md:pr-12 py-10 w-[350px] md:w-full'>
            <DashboardSearch />
          </div>
          <div className='ml-8 md:ml-0 overflow-y-auto'>
            <AvailableServicesTable
              width={isExpanded == true ? '1530px' : '1680px'}
            />
          </div>
        </main>
      </div>
    </div>
  );
}
