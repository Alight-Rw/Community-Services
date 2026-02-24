/** @format */

import React, { useState } from 'react';
import Paragraphy from '../../Shared/Title';
import DashboardSearch from '../../Shared/DashboardSearch';
import DashboardNav from '../../Shared/DashboardNav';
import Sidebar from '../../Shared/Sidebar';
import CompletedSevicesTable from './CompletedServiceTable'; 

export function CompletedSevices() {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className='flex flex-col h-screen bg-universal overflow-hidden'>
    <DashboardNav
        notificationNumber={4}
        notifications={[
          { id: 1,type: "success", title: "Booking Confirmed", message: "Your service booking for has been confirmed car Wash for tommorrow at",
            time: "10:00 AM", minutes:"10h ago", isUnread: true },
          { id: 2, type: "accepted", title: "Service Request Accepted", message: "Your blumping service has been accepted by a provider", time: "1h ago", isUnread: true },
          { id: 3, type: "info", title: "Reminder ", message: "Your  home cleaning services is scheduled for today at",
             minutes:"1h ago", isUnread: true },
          { id: 4, type: "accepted", title: "Service Completed", }
        ]}
      />
      <div className='flex flex-1 overflow-hidden relative'>
        {isExpanded && (
          <div
            className='fixed inset-0 bg-black/50 z-20 xl:hidden transition-opacity'
            onClick={() => setIsExpanded(false)}
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
              highlight='Completed Services'
              description='Quick summary of services that have been successfully delivered and finalized.'
            />
          </div>

          <div className='px-8 md:px-0 md:pr-12 py-10 w-[350px] md:w-full'>
            <DashboardSearch />
          </div>
          <div className='ml-8 md:ml-0 overflow-y-auto'>
            <CompletedSevicesTable 
              width={isExpanded == true ? '1530px' : '1680px'}
            />
          </div>
        </main>
      </div>
    </div>
  );
}
